import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const FB_PAGE_ID = process.env.FB_PAGE_ID;
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const FB_POSTS_LIMIT = Number(process.env.FB_POSTS_LIMIT ?? '8');

if (!FB_PAGE_ID || !FB_PAGE_ACCESS_TOKEN) {
  console.error('Missing required env vars: FB_PAGE_ID and FB_PAGE_ACCESS_TOKEN');
  process.exit(1);
}

const endpoint = new URL(`https://graph.facebook.com/v23.0/${FB_PAGE_ID}/posts`);
endpoint.searchParams.set('fields', 'id,message,permalink_url,created_time,full_picture,attachments{media_type,media,subattachments}');
endpoint.searchParams.set('limit', String(FB_POSTS_LIMIT));
endpoint.searchParams.set('access_token', FB_PAGE_ACCESS_TOKEN);

const response = await fetch(endpoint);
if (!response.ok) {
  const text = await response.text();
  console.error(`Facebook Graph API request failed: HTTP ${response.status}`);
  console.error(text);
  process.exit(1);
}

const payload = await response.json();
const posts = Array.isArray(payload.data) ? payload.data : [];

const extractImage = (post) => {
  if (post.full_picture) {
    return post.full_picture;
  }

  const firstAttachment = post.attachments?.data?.[0];
  const mediaImage = firstAttachment?.media?.image?.src;
  if (mediaImage) {
    return mediaImage;
  }

  const subAttachmentImage = firstAttachment?.subattachments?.data?.[0]?.media?.image?.src;
  return subAttachmentImage ?? null;
};

const normalizeWhitespace = (input) =>
  (input ?? '')
    .replace(/\s+/g, ' ')
    .trim();

const normalized = posts.map((post) => ({
  id: post.id,
  message: normalizeWhitespace(post.message),
  permalinkUrl: post.permalink_url,
  createdTime: post.created_time,
  image: extractImage(post),
}));

const output = {
  source: 'facebook-graph-api',
  pageId: FB_PAGE_ID,
  generatedAt: new Date().toISOString(),
  posts: normalized,
};

const outputDir = resolve('public/data');
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, 'facebook-posts.json'), `${JSON.stringify(output, null, 2)}\n`, 'utf8');

console.log(`Wrote ${normalized.length} Facebook posts to public/data/facebook-posts.json`);
