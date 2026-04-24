import { useState, useEffect } from 'react';
import {
  TreePine,
  Eye,
  FileText,
  Recycle,
  Flame,
  Ruler,
  Footprints,
  Church,
  Building2,
  Leaf,
  Shield,
  Users,
  Bird,
  MapPin,
  Mail,
  Youtube,
  Facebook,
  Menu,
  X,
  PenLine,
  AlertTriangle,
  Download,
  FileDown,    // ← PŘIDEJTE TUTO ŘÁDKU
  ExternalLink,
  Gavel,
  Image,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Gallery } from './components/Gallery';

export default function App() {
  const forestWasteImage = '/forest-waste.png';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [useHeroFallback, setUseHeroFallback] = useState(false);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);

  const heroImageDesktop = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fit=crop&w=1920&q=80';
  const heroImageMobile = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fit=crop&w=900&q=75';
  const heroImageDesktopAvif = `${heroImageDesktop}&fm=avif`;
  const heroImageMobileAvif = `${heroImageMobile}&fm=avif`;
  const heroImageDesktopWebp = `${heroImageDesktop}&fm=webp`;
  const heroImageMobileWebp = `${heroImageMobile}&fm=webp`;

  useEffect(() => {
    const handleScroll = () => {
      const petitionSection = document.getElementById('petition');
      if (petitionSection) {
        const rect = petitionSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowFloatingButton(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsDesktopViewport(window.innerWidth >= 768);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  // carousel state for YouTube shorts
  const shorts: {id: string; title: string}[] = [
    { id: 'eVpM2Ox7lnY', title: 'Short 1' },
    { id: 'wNOZnW988Rc', title: 'Short 2' },
    { id: 'LJ7l2ErGHEc', title: 'Short 3' },
    { id: 'XFkO-osmlI0', title: 'Short 4' },
  ];
  // show two shorts per page
  const perPage = 2;
  const totalPages = Math.ceil(shorts.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);
  const prevPage = () => setCurrentPage(p => (p - 1 + totalPages) % totalPages);
  const nextPage = () => setCurrentPage(p => (p + 1) % totalPages);
  const facebookPageUrl = 'https://www.facebook.com/profile.php?id=61587817198306';
  const FACEBOOK_EMBED_HEIGHT = isDesktopViewport ? 820 : 760;
  const toFacebookEmbedSrc = (permalink: string) =>
    `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(permalink)}&show_text=true&width=500`;

  const facebookPosts = [
    {
      id: 'fb-01',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0kyg3DVBSfUApZ2QvHdyhhHN5XYBSnSfuDD9gnwncFM2wem2T83of6BZDiDnByu6Al&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0kyg3DVBSfUApZ2QvHdyhhHN5XYBSnSfuDD9gnwncFM2wem2T83of6BZDiDnByu6Al&id=61587817198306'),
      height: 628,
    },
    {
      id: 'fb-02',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02FUZwxs6RY1mEoppaxjevuqzMQeYbcGwAdHkNdWMxQ6Q1QPwy9VD36Xm7i22TYeFcl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02FUZwxs6RY1mEoppaxjevuqzMQeYbcGwAdHkNdWMxQ6Q1QPwy9VD36Xm7i22TYeFcl&id=61587817198306'),
      height: 351,
    },
    {
      id: 'fb-03',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02f28cZ2JMsQG8TMF1JmCbXeKJ8Lk83dx89GKEFoaNqGCU7xXZssBZNvRY9VCZa6W3l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02f28cZ2JMsQG8TMF1JmCbXeKJ8Lk83dx89GKEFoaNqGCU7xXZssBZNvRY9VCZa6W3l&id=61587817198306'),
      height: 580,
    },
    {
      id: 'fb-04',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0wHGgVFT6rzW9LTwwv7X6NrnbKVMJRLqg8nNK7sh1xVVr8kPcQpfcQpRCktSW12mBl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0wHGgVFT6rzW9LTwwv7X6NrnbKVMJRLqg8nNK7sh1xVVr8kPcQpfcQpRCktSW12mBl&id=61587817198306'),
      height: 250,
    },
    {
      id: 'fb-05',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0aoimJg6ucJ3aPQi7NqoJ7i9sievg1PkGFrTvFo36Wz8LBAA6htwEGsWzNZcSUy1vl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0aoimJg6ucJ3aPQi7NqoJ7i9sievg1PkGFrTvFo36Wz8LBAA6htwEGsWzNZcSUy1vl&id=61587817198306'),
      height: 638,
    },
    {
      id: 'fb-06',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02BgWZcVJYsbeJbZE4kyogrVQPRZCGsdtxJgBTrhwtgDyoPdzaQnxSrH9aP8STmHTEl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02BgWZcVJYsbeJbZE4kyogrVQPRZCGsdtxJgBTrhwtgDyoPdzaQnxSrH9aP8STmHTEl&id=61587817198306'),
      height: 638,
    },
    {
      id: 'fb-07',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0oXeqUsCxmMoMUjTT8s5A4BVzVf3TJR8FvSKy5ENseKJUZzzxDrEqzfWEWpRBe6c1l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0oXeqUsCxmMoMUjTT8s5A4BVzVf3TJR8FvSKy5ENseKJUZzzxDrEqzfWEWpRBe6c1l&id=61587817198306'),
      height: 612,
    },
    {
      id: 'fb-08',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0NY7BWrcLWnRHjqXbXqXvZq7WsQ9kgo1GYYnL7gQTKqNLHWeNTtwYh3nZnNUe7Zmyl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0NY7BWrcLWnRHjqXbXqXvZq7WsQ9kgo1GYYnL7gQTKqNLHWeNTtwYh3nZnNUe7Zmyl&id=61587817198306'),
      height: 592,
    },
    {
      id: 'fb-09',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0XxA8yRvaCiJU2M3fHTwHW2wHFUAJiXqByhxxAhgCXVP3RtZVEAKpjWKCZuo62HL1l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0XxA8yRvaCiJU2M3fHTwHW2wHFUAJiXqByhxxAhgCXVP3RtZVEAKpjWKCZuo62HL1l&id=61587817198306'),
      height: 612,
    },
    {
      id: 'fb-10',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02k3Ps4JYBzQFCRTk8af8QH2SAraBXP8d96ces3VDoYhNE91KwuCM4Q6uCUGFEXwyyl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02k3Ps4JYBzQFCRTk8af8QH2SAraBXP8d96ces3VDoYhNE91KwuCM4Q6uCUGFEXwyyl&id=61587817198306'),
      height: 622,
    },
    {
      id: 'fb-11',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid06ybVTF7vJoyNaRkDEM3bSBbUzvDF6N3PBWfsLvvGKYJFZ6wHgqhNoTJZ9FMzf1ktl&id=61587817198306',
      embedEnabled: false,
    },
    {
      id: 'fb-12',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0q38YYSPYEApkCFkF4JzF37jcjsQxRAaa9w1h8edgA4dZj6CiEL6kn6tgpMXdWVbMl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0q38YYSPYEApkCFkF4JzF37jcjsQxRAaa9w1h8edgA4dZj6CiEL6kn6tgpMXdWVbMl&id=61587817198306'),
      height: 230,
    },
    {
      id: 'fb-13',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0xktgc9AQhnfaVehjkD44sAi5Mk15Lrmsg7EBJDCMxxWeq3NVoRZ6ioK4ipE7Ehw9l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0xktgc9AQhnfaVehjkD44sAi5Mk15Lrmsg7EBJDCMxxWeq3NVoRZ6ioK4ipE7Ehw9l&id=61587817198306'),
      height: 526,
    },
    {
      id: 'fb-14',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0me1K9PTEgSdFTZdyJTsAxPZZ1RkhXmiZco6Ju7A9y336oLan81yA5pX86cU2xugjl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0me1K9PTEgSdFTZdyJTsAxPZZ1RkhXmiZco6Ju7A9y336oLan81yA5pX86cU2xugjl&id=61587817198306'),
      height: 512,
    },
    {
      id: 'fb-15',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid086uLNST9UNKXz4phXgrKn1R5m5oKBnrGagxdB4q3nyknDo23Poc7KeREZQVKwuPMl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid086uLNST9UNKXz4phXgrKn1R5m5oKBnrGagxdB4q3nyknDo23Poc7KeREZQVKwuPMl&id=61587817198306'),
      height: 618,
    },
    {
      id: 'fb-16',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02UNSTQjX51cwBYv3MSoF62prLJjqQzSJ5UUDRm3FwxMZP5soARy92bSdGJPPpwo11l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02UNSTQjX51cwBYv3MSoF62prLJjqQzSJ5UUDRm3FwxMZP5soARy92bSdGJPPpwo11l&id=61587817198306'),
      height: 684,
    },
    {
      id: 'fb-17',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ihkPf8jtsXjtZ8P6LcHCBN1iL7s7doC8dMYpzesXsSS9wLttzPuKFqWyuBAfWSmul&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0ihkPf8jtsXjtZ8P6LcHCBN1iL7s7doC8dMYpzesXsSS9wLttzPuKFqWyuBAfWSmul&id=61587817198306'),
      height: 618,
    },
    {
      id: 'fb-18',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid028o6MWjrT3DwPsewjSuujaAofNZTj7ghbHF7vwWUKzdTjd9dzdePavz3oR9tcjTNml&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid028o6MWjrT3DwPsewjSuujaAofNZTj7ghbHF7vwWUKzdTjd9dzdePavz3oR9tcjTNml&id=61587817198306'),
      height: 680,
    },
    {
      id: 'fb-19',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0zeKjf6XPePD5kiXSWQC5zEcgw7hz7ScPfvx3Tw4DAdMssyUG2f6vwQfbppbjf65tl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0zeKjf6XPePD5kiXSWQC5zEcgw7hz7ScPfvx3Tw4DAdMssyUG2f6vwQfbppbjf65tl&id=61587817198306'),
      height: 680,
    },
    {
      id: 'fb-20',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid036S2zN7KXrw8EpG4vrxeW9LtFmoXYcMGcecp314iKG51EeLUfLsqNz1UBH62pYBcnl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid036S2zN7KXrw8EpG4vrxeW9LtFmoXYcMGcecp314iKG51EeLUfLsqNz1UBH62pYBcnl&id=61587817198306'),
      height: 599,
    },
    {
      id: 'fb-21',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0DsCW3vTBmZ6zfY4wHe8ecYkuadRy1YRYjSeknrZigBMEcjCNP9ytT5sCPCU9MFNBl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0DsCW3vTBmZ6zfY4wHe8ecYkuadRy1YRYjSeknrZigBMEcjCNP9ytT5sCPCU9MFNBl&id=61587817198306'),
      height: 580,
    },
    {
      id: 'fb-22',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02z7R8Hkg7KujfrfoR2NPyPzapNSenNx1P6TzKPsUMkNMm9mFkUDa9b7qqiwJoeX3Tl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02z7R8Hkg7KujfrfoR2NPyPzapNSenNx1P6TzKPsUMkNMm9mFkUDa9b7qqiwJoeX3Tl&id=61587817198306'),
      height: 583,
    },
    {
      id: 'fb-23',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0zX1PszEh8AeVAu7TdMQwYqLeaPNCTuZaHFv9SeLc8F77paVpZMqFF2CKPBxNCbdrl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0zX1PszEh8AeVAu7TdMQwYqLeaPNCTuZaHFv9SeLc8F77paVpZMqFF2CKPBxNCbdrl&id=61587817198306'),
      height: 599,
    },
    {
      id: 'fb-24',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0vs9M2Q62KdihZyeuwsrURmn2hWs8zibszoFB1nARgfMQNnTFapnGufgg4qR3o96Vl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0vs9M2Q62KdihZyeuwsrURmn2hWs8zibszoFB1nARgfMQNnTFapnGufgg4qR3o96Vl&id=61587817198306'),
      height: 619,
    },
    {
      id: 'fb-25',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0YvC6VLY55zKGLdx53w5HdQtpEU4iCdPQH8sBA3Mj8r1JU9fFQ62nvX8BQYkwLUcnl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0YvC6VLY55zKGLdx53w5HdQtpEU4iCdPQH8sBA3Mj8r1JU9fFQ62nvX8BQYkwLUcnl&id=61587817198306'),
      height: 613,
    },
    {
      id: 'fb-26',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0365qVCg1Y2e6SdeioUDoqM8V5RNWXVTGxs3m22eoa8LJzeebd6XEcZWkTytiTKMb9l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0365qVCg1Y2e6SdeioUDoqM8V5RNWXVTGxs3m22eoa8LJzeebd6XEcZWkTytiTKMb9l&id=61587817198306'),
      height: 787,
    },
    {
      id: 'fb-27',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0xxNLoq84VauFVFSzkwbitQQHDPcqUKjUV3XZZsxoJwNc1xUzzjxSqbJ3Myz1SzvHl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0xxNLoq84VauFVFSzkwbitQQHDPcqUKjUV3XZZsxoJwNc1xUzzjxSqbJ3Myz1SzvHl&id=61587817198306'),
      height: 618,
    },
    {
      id: 'fb-28',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02VkidLsKdqC3D8ap2aAgcFrmFtUGFsW3dp92nZL9t1vSp66evk8sKkRj5SHmfJiDWl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02VkidLsKdqC3D8ap2aAgcFrmFtUGFsW3dp92nZL9t1vSp66evk8sKkRj5SHmfJiDWl&id=61587817198306'),
      height: 613,
    },
    {
      id: 'fb-29',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0vBcRKW9ovzVbD498Egjk4DqUoGqoFedXRfJLBwVaFy2w89NZCevpeFrhLVJHbEmpl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0vBcRKW9ovzVbD498Egjk4DqUoGqoFedXRfJLBwVaFy2w89NZCevpeFrhLVJHbEmpl&id=61587817198306'),
      height: 609,
    },
    {
      id: 'fb-30',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0NvBsj5meM1gFFLiQHJeRJDvG1JPLeRgV3nQvbdHDTit59opkTYwXEcqxB3xrd9q8l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0NvBsj5meM1gFFLiQHJeRJDvG1JPLeRgV3nQvbdHDTit59opkTYwXEcqxB3xrd9q8l&id=61587817198306'),
      height: 618,
    },
    {
      id: 'fb-31',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid031gJABnCdK19uvs7buYDv6JGY8i7XyEvPLTn8sKrBSWDbca71M1zEiGEea4L5HwQ8l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid031gJABnCdK19uvs7buYDv6JGY8i7XyEvPLTn8sKrBSWDbca71M1zEiGEea4L5HwQ8l&id=61587817198306'),
      height: 606,
    },
    {
      id: 'fb-32',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02eZwa8SEBXB8D87BQMHfM49CH18AFZMZFZjUmRxrR8ef3Gd8YrmXhSkHzBzvuj8E5l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02eZwa8SEBXB8D87BQMHfM49CH18AFZMZFZjUmRxrR8ef3Gd8YrmXhSkHzBzvuj8E5l&id=61587817198306'),
      height: 638,
    },
    {
      id: 'fb-33',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid08W5LyTX6kChd7ZgVjs2MBdo4ThSgK1LbRrC4wSdd1eFzSWsABdLaEQDCvbArMJPVl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid08W5LyTX6kChd7ZgVjs2MBdo4ThSgK1LbRrC4wSdd1eFzSWsABdLaEQDCvbArMJPVl&id=61587817198306'),
      height: 493,
    },
    {
      id: 'fb-34',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid024E4M9yckzEsiuFa9yaTDsV5ukeV8QTSoRHR3wZMGPfG1SMxiugUV8akUHEw8da86l&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid024E4M9yckzEsiuFa9yaTDsV5ukeV8QTSoRHR3wZMGPfG1SMxiugUV8akUHEw8da86l&id=61587817198306'),
      height: 531,
    },
    {
      id: 'fb-35',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02A1fJWmvBsB2WJFBVVFtQRLjAQYgX6SW4MKkbZb5i2hfCPQuJxGV3kiDEmAS9xBAHl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02A1fJWmvBsB2WJFBVVFtQRLjAQYgX6SW4MKkbZb5i2hfCPQuJxGV3kiDEmAS9xBAHl&id=61587817198306'),
      height: 575,
    },
    {
      id: 'fb-36',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02EnWTvYAsHSf73tQRyygbM3iSNjpXSaNDg1WHMQrShYzfLaYWjukkZREvLi8Rr3Cdl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02EnWTvYAsHSf73tQRyygbM3iSNjpXSaNDg1WHMQrShYzfLaYWjukkZREvLi8Rr3Cdl&id=61587817198306'),
      height: 538,
    },
    {
      id: 'fb-37',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0gUaQjK53nZ5CVNDRvKYFddqvPBnrN61nYbuVwBsQrpYp8WT9MSfZbdDMJcY5a4jml&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0gUaQjK53nZ5CVNDRvKYFddqvPBnrN61nYbuVwBsQrpYp8WT9MSfZbdDMJcY5a4jml&id=61587817198306'),
      height: 612,
    },
    {
      id: 'fb-38',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0WrQPDUcvtUsrSSpa7C1T9FKJ2gL9i5LzWCgr46ZYRtfd1bsVVbuDHKaGTo8AyyMWl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0WrQPDUcvtUsrSSpa7C1T9FKJ2gL9i5LzWCgr46ZYRtfd1bsVVbuDHKaGTo8AyyMWl&id=61587817198306'),
      height: 586,
    },
    {
      id: 'fb-39',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0wevHX1zKNZmNt9koovmxgjyqvGmDiRrZe8TSKpm3QvaqeaJnuFzYJHu8qjybMreJl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0wevHX1zKNZmNt9koovmxgjyqvGmDiRrZe8TSKpm3QvaqeaJnuFzYJHu8qjybMreJl&id=61587817198306'),
      height: 793,
    },
    {
      id: 'fb-40',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0jRvkMJFSQ3EAnKE72N9SFKKKe4d9qG6X8Kn13KU1DUrScs5vZfF8WaLUoTAbVPEfl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0jRvkMJFSQ3EAnKE72N9SFKKKe4d9qG6X8Kn13KU1DUrScs5vZfF8WaLUoTAbVPEfl&id=61587817198306'),
      height: 547,
    },
    {
      id: 'fb-41',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0uJxFMvz1Pk1WM1qbCXhrYvmvPqm4RK71p2xLRjqPDY87FFNwpt311VzY6ekBaYyHl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0uJxFMvz1Pk1WM1qbCXhrYvmvPqm4RK71p2xLRjqPDY87FFNwpt311VzY6ekBaYyHl&id=61587817198306'),
      height: 554,
    },
    {
      id: 'fb-42',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0k7FECuS1VGSirrFd4QJ4jiDiNdXN4W6ddYp9nj5wBkfuaqSAbozc5JfNe4pY5Zibl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0k7FECuS1VGSirrFd4QJ4jiDiNdXN4W6ddYp9nj5wBkfuaqSAbozc5JfNe4pY5Zibl&id=61587817198306'),
      height: 618,
    },
    {
      id: 'fb-43',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0nVWLGiZneHn1EzsYRQzKrYKBJPEesZYbPAYNcb3QmEQ38phMGRUQ1ggz9fjh7Jwfl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid0nVWLGiZneHn1EzsYRQzKrYKBJPEesZYbPAYNcb3QmEQ38phMGRUQ1ggz9fjh7Jwfl&id=61587817198306'),
      height: 573,
    },
    {
      id: 'fb-44',
      url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02s1Vz9hGxNQBQkFqijnV73sVhnpZRZGz8fo3VRTs2MeEEvKKfKkYDdz1LzNWhfzLxl&id=61587817198306',
      src: toFacebookEmbedSrc('https://www.facebook.com/permalink.php?story_fbid=pfbid02s1Vz9hGxNQBQkFqijnV73sVhnpZRZGz8fo3VRTs2MeEEvKKfKkYDdz1LzNWhfzLxl&id=61587817198306'),
      height: 554,
    },
  ];
  const [activeFacebookIndex, setActiveFacebookIndex] = useState(facebookPosts.length - 1);
  const activeFacebookPost = facebookPosts[activeFacebookIndex] ?? facebookPosts[facebookPosts.length - 1];
  const prevFacebookPost = () => setActiveFacebookIndex((index) => (index - 1 + facebookPosts.length) % facebookPosts.length);
  const nextFacebookPost = () => setActiveFacebookIndex((index) => (index + 1) % facebookPosts.length);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d5016] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-white/80 transition-colors"
            >
              <TreePine className="w-6 h-6" />
              <span>Les u Kožovky</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {[
                'Úvod',
                'O problému',
                'Podporovatelé',
                'Historie',
                'Galerie',
                'Média',
                'Aktéři',
                'Požadavky',
                'Dokumenty',
                'Oficiální podnět',
                'Petice',
                'Kontakt',
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    scrollToSection(
                      [
                        'home',
                        'problem',
                        'supporters',
                        'timeline',
                        'gallery',
                        'media',
                        'actors',
                        'demands',
                        'documents',
                        'official-motion',
                        'petition',
                        'contact',
                      ][idx]
                    )
                  }
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {[
              'Úvod',
              'O problému',
              'Podporovatelé',
              'Historie',
              'Galerie',
              'Média',
              'Aktéři',
              'Požadavky',
              'Dokumenty',
              'Oficiální podnět',
              'Petice',
              'Kontakt',
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  scrollToSection(
                    [
                      'home',
                      'problem',
                      'supporters',
                      'timeline',
                      'gallery',
                      'media',
                      'actors',
                      'demands',
                      'documents',
                      'official-motion',
                      'petition',
                      'contact',
                    ][idx]
                  )
                }
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* ✅ DŮLEŽITÉ: uzavření nav přidáno */}

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white pt-20">
        <div className="absolute inset-0">
          {useHeroFallback ? (
            <img
              src={forestWasteImage}
              alt="Les u Kožovky"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <picture>
              <source
                type="image/avif"
                srcSet={`${heroImageMobileAvif} 900w, ${heroImageDesktopAvif} 1920w`}
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet={`${heroImageMobileWebp} 900w, ${heroImageDesktopWebp} 1920w`}
                sizes="100vw"
              />
              <img
                src={heroImageDesktop}
                srcSet={`${heroImageMobile} 900w, ${heroImageDesktop} 1920w`}
                sizes="100vw"
                alt="Les u Kožovky"
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
                onError={() => setUseHeroFallback(true)}
              />
            </picture>
          )}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
            Les u Kladna v ohrožení:<br />
            opakující se černá skládka
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-light drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Lesní pozemek ve vlastnictví Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze čelí opakovanému
            znečištění černou skládkou a nelegálnímu pobytu bezdomovce. Příroda trpí, zvěř je ohrožena a úřady jen nečinně
            přihlížejí.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={() => scrollToSection('problem')}
              className="bg-[#4a7c2c] hover:bg-[#5a9c3c] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto"
            >
              Zjistit více
            </button>
            <a
              href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e67e22] hover:bg-[#d35400] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg inline-block w-full sm:w-auto text-center"
            >
              Podepsat petici
            </a>
          </div>
        </div>
      </section>

      {/* ... zbytek souboru nechávám stejný jako v paste.txt ... */}
      {/* O problému */}
<section id="problem" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
      Co se děje v lese u Kožovky na Kladně?
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
    </h2>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-700">
          Lesní pozemek ve vlastnictví <strong>Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze</strong>, v lokalitě <strong>V Kožovech u Kladna</strong> (ve směru na Kožovu horu), čelí vážnému a opakujícímu se problému.
        </p>
        <p className="text-gray-600">
          <strong>Muž bez domova, který se zde dlouhodobě zdržuje, v lese soustavně hromadí odpadky a igelitové tašky a zakládá černou skládku.</strong> Pozemek byl opakovaně vyčištěn za přítomnosti městských strážníků i odpadové firmy – <strong>bezdomovec se však vždy vrátí a vše opakuje od začátku.</strong> Situace ohrožuje místní faunu, kontaminuje lesní půdu a představuje riziko požáru v bezprostřední blízkosti obytné zástavby.
        </p>
        <p className="text-gray-600">
          <strong>V sobotu 12. dubna 2025 ráno v lokalitě skutečně vypukl požár.</strong> Hasiči Středočeského kraje zasahovali přímo v lesním porostu – hořely hromady odpadků a igelitu nashromážděné bezdomovcem. Na místo byli přivoláni i policisté. Podle mluvčího středočeských hasičů Ladislava Holomčíka <strong>požár zřejmě založil sám muž, který se v lokalitě dlouhodobě zdržuje.</strong>
        </p>
        <p className="text-gray-600">
          Přestože situaci opakovaně řeší městská policie, Policie ČR i smluvní odpadová firma, žádná ze zúčastněných institucí dosud nepřijala systémové opatření. <strong>Les hoří doslova i přeneseně – a nikdo nenese odpovědnost.</strong>
        </p>
      </div>
      <div>
        <img
          src={forestWasteImage}
          alt="Znečištěný les se skládkou odpadků"
          className="w-full h-[400px] object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Recycle, title: 'Opakované úklidy', desc: 'Pozemek vyčištěn opakovaně – problém se ale vždy vrací' },
        { icon: Flame, title: '1 požár', desc: 'Zaznamenaný požár na pozemku v roce 2025' },
        { icon: Ruler, title: '~12 750 m²', desc: 'Odhadovaná rozloha zasažené oblasti' },
        { icon: Footprints, title: 'Ohrožená zvěř', desc: 'Divoká prasata, srnci, drobní savci, čolci, ropuchy, skokani atp.' }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform text-center">
          <item.icon className="w-12 h-12 mx-auto mb-4 text-[#4a7c2c]" />
          <h4 className="text-xl font-semibold text-[#2d5016] mb-2">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Odkaz na katastr nemovitostí */}
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-xl text-white">
        <div className="flex items-start gap-4">
          <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">Informace o pozemku</h4>
            <p className="mb-4 opacity-90">
              Dotčený pozemek je veden v katastru nemovitostí. Veškeré informace o vlastnictví, výměře a hranicích pozemku jsou veřejně dostupné.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?typ=parcela&id=1145895203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2d5016] px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Zobrazit v katastru nemovitostí
              </a>
              <div className="text-sm opacity-90 flex items-center">
                <span className="bg-white/20 px-3 py-2 rounded-full">
                  Parcela č. <strong>3830/4</strong> | k.ú. <strong>Kročehlavy [665126]</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dopad na přírodu a chráněné druhy */}
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
          Dopad na chráněnou přírodu a šíření nemocí
        </h3>
        <p className="text-gray-600">
          <strong>V důsledku nepořádku a duševního stavu osoby neprávem okupující předmětný pozemek dochází k nekontrolovatelnému množení koček,</strong> které následně hromadně vymírají. Tato situace představuje nejen problém pro welfare zvířat, ale i <strong>potenciální riziko šíření nemocí a infekcí</strong> do okolní přírody i lidské populace.
        </p>
        <p className="text-gray-600">
          <strong>V bezprostřední blízkosti znečištění se nachází přilehlá bažina</strong> (<a href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?typ=parcela&id=723526203" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">parcela č. 3884, k.ú. Kročehlavy [665126], druh pozemku: vodní plocha, způsob využití: zamokřená plocha</a>) s výskytem <strong>zvláště chráněných živočichů – obojživelníků:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li><strong>Čolek obecný</strong> (<em>Lissotriton vulgaris</em>) – <span className="text-orange-600 font-semibold">zranitelný a silně ohrožený druh</span></li>
          <li><strong>Čolek horský</strong> (<em>Ichthyosaura alpestris</em>) – <span className="text-orange-600 font-semibold">zranitelný a silně ohrožený druh</span></li>
          <li><strong>Čolek velký</strong> (<em>Triturus cristatus</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
          <li><strong>Ropucha zelená</strong> (<em>Bufotes viridis</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
          <li><strong>Skokan štíhlý</strong> (<em>Rana dalmatina</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
        </ul>
        <p className="text-gray-600">
          <strong>Všechny zmíněné druhy spadají pod přísnou ochranu podle zákona č. 114/1992 Sb., o ochraně přírody a krajiny, ve znění pozdějších předpisů (a jeho prováděcích předpisů) jako zvláště chráněné druhy a figurují v <a href="https://portal.nature.cz/cervene-seznamy#/" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">Červeném seznamu ohrožených druhů ČR</a>.</strong> Vznikem nelegální skládky dochází k přímému porušování § 50 zákona č. 114/1992 Sb., neboť je ničen a poškozován biotop druhů chráněných vyhláškou č. 395/1992 Sb. v kategorii silně ohrožené.
        </p>
        <p className="text-gray-600">
          Okolí Kladna je obecně bohaté na stanoviště s výskytem <strong>zvláště chráněných rostlin a živočichů.</strong> Z rostlin se v Rozdělovských jezírcích (nedaleko dotčené oblasti) vyskytuje např. <strong>bublinatka</strong> (<em>Utricularia spec.</em>). Kontaminace půdy, šíření patogenů a narušení ekosystému tak ohrožuje celou síť chráněných biotopů v regionu.
        </p>
        <p className="text-gray-600">
          Na základě odpovědi <strong>Povodí Vltavy, státní podnik</strong> ze dne <strong>14. 04. 2026</strong> (<a href="https://drive.google.com/file/d/1LA6_a8KCz6nXvcO4Y4ZgbQAs_pPe7IN4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">zobrazit dokument</a>) je zřejmé, že problémový pozemek leží v <strong>ochranném pásmu vodního zdroje II. stupně</strong>. Věc proto musí řešit příslušný <strong>odbor životního prostředí Magistrátu města Kladna – vodoprávní úřad</strong>, a to zejména s ohledem na možné porušení <strong>§ 30 odst. 8 zákona č. 254/2001 Sb., o vodách (vodní zákon)</strong>.
        </p>
      </div>
    </div>

    <div className="mt-16 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
          Aktuální vývoj k 19. 03. 2026
        </h3>
        <p className="text-gray-600">
          Dne <strong>19. 03. 2026</strong> proběhl úklid původně znečištěného pozemku, avšak muž bez domova se přesunul o několik metrů dál na pozemek <a href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?encrypted=NAHL~2xb_LPeFLQ6EtRubNxm9u1vm0GEOSVydM6KDUD2DydezE0pJsoeB9yl-ebe_4elfpBbBko5Zva6fFT_QYKSBwNe37V5QGlyTsZvKuhRuqix0HKx6Q6qk-49FOIBjSr8hmKMUNSrgmWF8QStn2WlJBNEl9f9TIN0oeWnsnnXEOqwPzG0GFRS4oCqiupgLGUrhprGk8ydseezjKBF7vWzxi-XAXp0kISSlKMJ8uHF1-xH87FzuVZkNNXq0wKklzYJs" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline"><strong>p.p.č. 3886/6</strong></a> v k.ú. Kročehlavy, který je rovněž ve vlastnictví církve a nachází se v bezprostřední blízkosti sportovních areálů. Tím se problém pouze přesunul na nové místo a aktuálně představuje <strong>přímé zdravotní riziko pro děti a rodiče (členy sportovišť) i návštěvníky lokality</strong>. V odpadu se dle slov předsedy Badmintonového Klubu Kladno mohou nacházet <strong>nebezpečné látky, použité injekční stříkačky a další kontaminovaný materiál</strong>.
        </p>
        <p className="text-gray-600">
          Zároveň dochází k tomu, že odpad láká <strong>škůdce a volně žijící zvířata</strong> (zejména potkany a krysy), kteří následně v postiženém místě vyhledávají potravu. To způsobuje jejich pohyb i na okolních pozemcích – zejména na pozemcích sportovišť, která toto zaznamenávají již od prvního dne přesunu muže bez domova. Tyto pozemky jsou přitom využívány zejména dětmi. Negativní dopady se projevují také v klidové zóně určené mimo jiné pro psy. I zde již sportoviště evidují plastový a další přenesený odpad; podle dostupných svědectví navíc dochází i k jeho přehazování na sousední pozemky. Vzhledem k tomu, že množství odpadu v posledních měsících narůstá, je nezbytné situaci <strong>bezodkladně řešit</strong>.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Podporovatelé */}
      <section id="supporters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8 relative pb-4">
            Podporují nás
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.slavojkladno.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/slavoj.png" alt="FK Slavoj Kladno logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">FK Slavoj Kladno</h4>
            </a>

            <a
              href="https://www.e-kladensko.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/ekladensko.png" alt="e-Kladensko.cz logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">e-Kladensko.cz</h4>
            </a>

            <a
              href="https://www.uklidmecesko.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/uklidme.png" alt="Ukliďme Česko logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">Ukliďme Česko</h4>
            </a>

            <a
              href="https://obchod.barfshop.cz/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/barf.png" alt="Barfshop Kladno logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">Barfshop Kladno</h4>
            </a>

            <a
              href="https://www.behproutulky.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/pomahejme.png" alt="Pomáhejme zvířatům z.s. logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">Pomáhejme zvířatům z.s.</h4>
            </a>

            <a
              href="https://www.badmintonkladno.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/bck.png" alt="Badminton Klub Kladno logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">Badminton Klub Kladno</h4>
            </a>

            <a
              href="https://nonstopzamky.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/zamky.png" alt="NON STOP Zámky logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">NON STOP Zámky</h4>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-16 relative pb-4">
            Historie problému
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="space-y-12">
            {[
              {
                date: '2022',
                title: 'První výskyt',
                desc: 'Muž bez domova se začíná dlouhodobě zdržovat v lese V Kožovech ve směru na Kožovu horu na okraji Kladna na pozemku ve vlastnictví <strong>Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze.</strong> Postupně vzniká <strong>černá skládka odpadků a igelitových tašek.</strong>',
                icon: Eye
              },
              {
                date: 'Od roku 2022',
                title: 'Nabídka sociální pomoci odmítnuta',
                desc: '<strong>Sociální odbor Magistrátu města Kladna</strong> nabízí muži pomoc. Jeho opatrovnice je s ním v častém kontaktu. Muž <strong>veškerou nabízenou pomoc zarputile odmítá</strong> — podle svých slov musí zůstat v lese, aby se mohl starat o toulavé kočky.',
                icon: Users
              },
              {
                date: '2022 – 2025',
                title: 'Opakované úklidy',
                desc: 'Na základě dohody vlastníka lesa a Magistrátu města Kladna zajišťuje úklid <strong>firma AVE Kladno.</strong> Strážníci musí opakovaně zasahovat (muž se <strong>úklidu fyzicky brání</strong>) a za pomoci donucovacích prostředků je odváděn od pracovníků. Nahromaděný odpad totiž považuje za svůj majetek. <strong>Úklid se opakuje, trvalé řešení nenásleduje.</strong>',
                icon: Recycle
              },
              {
                date: '12. dubna 2025',
                title: 'Požár v lese',
                desc: 'V sobotu ráno v lesním porostu v lokalitě V Kožovech <strong>vypukl požár.</strong> Zasahují hasiči Středočeského kraje. Hořely hromady odpadků a igelitových tašek nashromážděné mužem bez domova. Na místo dorazili i policisté. <strong>Mluvčí středočeských hasičů Ladislav Holomk potvrdil, že "požár zřejmě založil sám muž"</strong> dlouhodobě žijící v lokalitě. Případ zachytila média (kladensky.denik.cz, nasekladno.cz, silvarium.cz).',
                icon: Flame
              },
              {
                date: '7. ledna 2026',
                title: 'Další zásah (AVE Kladno + strážníci)',
                desc: '<strong>Firma AVE Kladno</strong> přistavuje bikramovou vanu, strážníci opět zajišťují pořádek při úklidu. Během dopoledne je vše uklizeno a odvezeno. <strong>Muži je znovu nabídnuta pomoc — opět odmítnuta.</strong> Cyklus se uzavírá a obratem začíná znovu.',
                icon: Recycle
              },
              {
                date: '23. února 2026',
                title: 'Spuštění webu a petice',
                desc: 'Vzniká web <strong>leskozovka.cz</strong> jako první systematická občanská reakce na situaci. Spouští se veřejná petice adresovaná <strong>městu Kladno, Břevnovskému klášteru, ČIŽP a Středočeskému kraji.</strong> Cílem je <strong>trvalé systémové řešení</strong>, ne další úklid za půl roku.',
                icon: PenLine
              },
              {
                date: '23. února - 19. března 2026',
                title: 'Sběr všech informací',
                desc: 'Aktuálně probíhá <strong>systematický sběr všech dosavadních informací</strong> od dotčených orgánů a subjektů: Magistrát města Kladna, Policie, Hasiči, Veterina, Česká inspekce životního prostředí, vlastník pozemku i občané.',
                icon: FileText
              },
              {
                date: '19. března 2026',
                title: 'Problém se přesunul k areálům sportovních klubů',
                desc: 'Dnes jsme obdrželi zprávy od zástupců <strong>FK Slavoj Kladno</strong> a <strong>Badminton Klubu Kladno</strong>, že se problém nepodařilo skutečně vyřešit, ale pouze přesunout z původního místa k prostoru u sportovišť; i když úklid původní lokality je pozitivní krok, v novém místě se podle klubů znovu hromadí odpad, objevují se potkani a další havěť a vzniká tak <strong>nepřijatelné zdravotní riziko pro děti a mládež</strong>, což nelze považovat za systémové ani dostatečné řešení.',
                icon: AlertTriangle
              },
              {
                date: '20. března 2026',
                title: 'Zaslání oficiálního podnětu Magistrátu města Kladna',
                desc: 'Dne <strong>20. 03. 2026</strong> byl odeslán komplexní oficiální podnět, primárně adresovaný <strong>Magistrátu města Kladna</strong> a současně zaslaný na vědomí dalším příslušným orgánům (ČIŽP, KVS, KHS, HZS, Policie ČR, Povodí Vltavy a Benediktinské arciopatství). Podnět byl podán podle <strong>§ 42 správního řádu</strong> s výzvou k zahájení řízení z moci úřední dle § 2 správního řádu a s žádostí o informaci do 30 dnů o přijatých opatřeních. <a href="https://drive.google.com/file/d/1W4qs2eS412JGnq-_w-TSv_bB6egDD-uc/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><strong>Zobrazit celé znění podnětu</strong></a>.',
                icon: PenLine
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4a7c2c] -translate-x-1/2" />
                
                <div className={`relative flex items-center gap-8 w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-[#2d5016] font-semibold mb-2">{item.date}</div>
                      <h5 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h5>
                      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-[#4a7c2c] items-center justify-center text-white flex-shrink-0 z-10">
                    <item.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Fotodokumentace
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white mb-8">
              <Image className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Kompletní fotodokumentace problému</h3>
              <p className="text-lg mb-6 opacity-90">
                Veškerá fotodokumentace (černá skládka, nelegální pobyt, požár a úklidové akce) je volně dostupná na Google Disku. Fotografie dokumentují závažnost situace a jsou k dispozici pro média, úřady i veřejnost.
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1mgzH9geW9sDTxL8pHUWV_cPxMy_sPE5i?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:bg-gray-100"
              >
                <ExternalLink className="w-6 h-6" />
                Zobrazit fotogalerii
              </a>
            </div>
            
            <p className="text-gray-600 text-sm mb-12">
              Fotografie jsou uspořádané chronologicky a tematicky. Dokládají rozsah znečištění, opakované úklidy, důkazy nelegálního pobytu i následky požáru z dubna 2025.
            </p>
          </div>

          {/* Videodokumentace */}
<div className="mt-16">
  <h3 className="text-3xl font-bold text-center text-[#2d5016] mb-8">
    Videodokumentace
  </h3>

  {/* Shorts carousel */}
  <div className="relative max-w-5xl mx-auto">
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div
        className="flex gap-x-2 transition-transform duration-300"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {shorts.map((short) => (
          <div key={short.id} className="flex-shrink-0 w-1/2">
            <div className="aspect-[9/16]">
              <iframe
                src={`https://www.youtube.com/embed/${short.id}`}
                title={short.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevPage}
        aria-label="Předchozí shorty"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextPage}
        aria-label="Další shorty"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>

  {/* Standardní video (16:9) */}
  <div className="max-w-4xl mx-auto mt-8">
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-video">
        <iframe
          src="https://www.youtube.com/embed/2GnL7_9h2zE"
          className="w-full h-full"
          title="Standardní video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* V médiích o nás */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            V médiích o problému
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            O problému černé skládky u Kladna již informovala řada médií. Přinášíme přehled článků, které dokumentují závažnost situace a upozorňují veřejnost na trvající problém.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Bezdomovce u Kožovky vyklízela odpadová firma i strážníci',
                media: 'KM Zprávy',
                date: '12. prosince 2022',
                excerpt: 'V úterý 7. ledna přijela k lesu u Kožovky odpadová firma AVE Kladno s bikramovou vanou. Strážníci zajišťovali pořádek při úklidu. Během dopoledne bylo vše uklizeno a odvezeno. Muži byla opět nabídnuta pomoc — opět odmítnuta.',
                url: 'https://kmzpravy.cz/bezdomovce-u-kozovky-vyklizela-odpadova-firma-i-straznici/'
              },
              {
                title: 'Strážníci prováděli dohled při úklidu lesa v Kožovech',
                media: 'Městská policie Kladno',
                date: '12. prosince 2022',
                excerpt: 'Strážníci Městské policie Kladno zajišťovali pořádek a dohled při úklidu lesa v lokalitě Kožovy. Akce probíhala ve spolupráci s odpadovou firmou AVE Kladno. Muži žijícímu na pozemku byla opakovaně nabídnuta sociální pomoc.',
                url: 'https://mpkladno.cz/straznici-provadeli-dohled-pri-uklidu-lesa-v-kozovech/d-1709'
              },
              {
                title: 'U kladenského poustevníka zasahovala úklidová četa. Pod dohledem strážníků',
                media: 'Kladenský deník',
                date: '13. prosince 2022',
                excerpt: 'V prosinci 2022 proběhl v kladenském lese rozsáhlý úklid nepořádku, který tam dlouhodobě hromadil muž bez domova. Pracovníci úklidové firmy museli za asistence městských strážníků z pozemku odvézt dva velkokapacitní kontejnery plné odpadu, staré elektroniky a dokonce i uhynulých zvířat.',
                url: 'https://kladensky.denik.cz/zpravy_region/u-kladenskeho-poustevnika-zasahovala-uklidova-ceta-pod-dohledem-strazniku-202212.html'
              },
              {
                title: 'Kladenští strážníci zasahovali proti bezdomovci, který znečišťoval les',
                media: 'e-kladensko.cz',
                date: '14. prosince 2022',
                excerpt: 'Městská policie Kladno opakovaně zasahuje v lese u Kožovky. Bezdomovec se zde dlouhodobě zdržuje a hromadí odpadky. Strážníci musí zajišťovat pořádek při úklidu, muž se fyzicky brání.',
                url: 'https://www.e-kladensko.cz/zpravy/1607-kladensti-straznici-zasahovali-proti-bezdomovci-ktery-znecistoval-les'
              },
              {
                title: 'V lese na okraji Kladna hořelo. Požár zřejmě založil bezdomovec',
                media: 'Kladenský deník',
                date: '12. dubna 2025',
                excerpt: 'V sobotu ráno vypukl v lesním porostu u Kožovky požár. Zasahovali hasiči Středočeského kraje. Hořely hromady odpadků a igelitových tašek nashromážděné bezdomovcem. Mluvčí hasičů potvrdil, že požár zřejmě založil muž žijící v lokalitě.',
                url: 'https://kladensky.denik.cz/krimi/v-lese-na-okraji-kladna-horelo-pozar-zrejme-zalozil-bezdomovec-20250412.html'
              },
              {
                title: 'U Kožovky v sobotu ráno hořely odpadky v lese. Požár pravděpodobně založil známý bezdomovec, který zde žije',
                media: 'NašeKladno.cz',
                date: '12. dubna 2025',
                excerpt: 'V sobotu ráno zasahovali hasiči u požáru v lese u Kožovky. Hořely odpadky a igelitové tašky nashromážděné bezdomovcem, který v lokalitě dlouhodobě pobývá. Požár pravděpodobně založil sám.',
                url: 'https://www.nasekladno.cz/u-kozovky-v-sobotu-rano-horely-odpadky-v-lese-pozar-pravdepodobne-zalozil-znamy-bezdomovec-ktery-zde-zije/'
              },
              {
                title: 'V lese na okraji Kladna hořelo. Požár zřejmě založil bezdomovec',
                media: 'Silvarium.cz',
                date: '14. dubna 2025',
                excerpt: 'Zpravodajský portál pro lesnictví a dřevařství přinesl zprávu o požáru v lese u Kladna. Požár zřejmě způsobil bezdomovec dlouhodobě žijící v lokalitě.',
                url: 'https://silvarium.cz/zpravy-z-oboru-lesnictvi-a-drevarstvi/v-lese-na-okraji-kladna-horelo-pozar-zrejme-zalozil-bezdomovec-kladensky-denik-cz'
              },
              {
                title: 'Úklid lesa: Skládka na okraji Kladna zmizela, odvezli dvě bikramky odpadu',
                media: 'Kladenský deník',
                date: '7. ledna 2026',
                excerpt: 'Firma AVE Kladno ve spolupráci s městskou policií provedla rozsáhlý úklid černé skládky v lese u Kožovky. Byly odvezeny dvě bikramové vany plné odpadu. Strážníci zajišťovali pořádek při akci.',
                url: 'https://kladensky.denik.cz/zpravy_region/uklid-lesa-skladka-na-okraji-kladna-zmizela-odvezli-dve-bikramky-odpadu-20260107.html'
              },
              {
                title: 'Také vám vadí nepořádek v lese na Kladně po bezdomovcích? Vznikla petice',
                media: 'e-kladensko.cz',
                date: '24. února 2026',
                excerpt: 'V lese Kožovka na okraji Kladna se už několik let opakuje nepořádek/černá skládka spojená s pobytem osoby bez domova. Iniciativa Les Kožovka proto spustila web leskozovka.cz společně s veřejnou peticí a žádá systémové řešení, nejen další opakovaný úklid.',
                url: 'https://www.e-kladensko.cz/zpravy/6531-take-vam-vadi-neporadek-v-lese-na-kladne-po-bezdomovcich-vznikla-petice'
              },
              {
                title: 'Také vám vadí nepořádek v lese na Kladně po bezdomovcích? Vznikla petice',
                media: 'Silvarium.cz',
                date: '25. února 2026',
                excerpt: 'V lese Kožovka na okraji Kladna se už několik let opakuje nepořádek/černá skládka spojená s pobytem osoby bez domova. Iniciativa Les Kožovka proto spustila web leskozovka.cz společně s veřejnou peticí a žádá systémové řešení, nejen další opakovaný úklid.',
                url: 'https://silvarium.cz/zpravy-z-oboru-lesnictvi-a-drevarstvi/take-vam-vadi-neporadek-v-lese-na-kladne-po-bezdomovcich-vznikla-petice-e-kladensko-cz'
              },
              {
                title: 'Skládku v lese Kožovka město dlouhodobě neřešilo',
                media: 'e-kladensko.cz',
                date: '10. března 2026',
                excerpt: 'Město podle článku nechávalo problém skládky v lese Kožovka dlouhodobě bez účinného řešení, takže se po každém úklidu znovu obnovovala. Text proto zdůrazňuje potřebu systémového zásahu místo dalších jednorázových úklidů.',
                url: 'https://www.e-kladensko.cz/zpravy/6592-skladku-v-lese-kozovka-mesto-dlouhodobe-neresilo?fbclid=IwY2xjawQcuhpleHRuA2FlbQIxMQBicmlkETEyOTFPV3VhWXU2cTZJODFWc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjnUoHD5PDRTm0AMJdhuLk3UNirjH0IxAoBr2JlDZjd-3UmiKyPI0ec5nAUi_aem_OgmfisUfoHCaN3gn8RXL2Q'
              },
              {
                title: 'Les u Kožovky: bezdomovec nyní hromadí nepořádek u badmintonu',
                media: 'e-kladensko.cz',
                date: '19. března 2026',
                excerpt: 'Po úklidu původního místa se podle iniciativy problém pouze přesunul k areálům fotbalového a badmintonového klubu, kde se znovu hromadí odpad a objevují se zdravotní rizika. Iniciativa požaduje koordinované a skutečně systémové řešení, nikoliv další přesouvání problému.',
                url: 'https://www.e-kladensko.cz/zpravy/6626-les-u-kozovky-bezdomovec-nyni-hromadi-neporadek-u-badmintonu?fbclid=IwY2xjawQo7j1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeDIozZqZHxbnA80zzJPrK9kdtBqlQK00-9O_NAWABwo1jdWBPTozjm0vhlFo_aem_38_oLsGwvAUowpEA8htEMQ'
              },
              {
                title: 'V lese na Kožovce opět hořelo',
                media: 'e-kladensko.cz',
                date: '8. dubna 2026',
                excerpt: 'Kolem sedmé večer jsme řešili požár u vlakového nádraží na slepé koleji. Šlo o požár...',
                url: 'https://www.e-kladensko.cz/zpravy/6695-v-lese-na-kozovce-opet-horelo?fbclid=IwY2xjawRDKcZleHRuA2FlbQIxMQBicmlkETFsYXJ4am9BUWN5dXh0Vkgxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvWtO7cBVmmw6TBZ_BJRL80R3eMCZZxIi7qEb4vr5ncy4jWcEvoagyhH1JI9_aem_sT1SeBRjjL_n4eGxyUBUNg'
              },
              {
                title: 'Tento nepořádek nanosil bezdomovec na Kožovku za měsíc. Co s ním?',
                media: 'e-kladensko.cz',
                date: '16. dubna 2026',
                excerpt: 'V posledních dnech došlo k dalšímu výraznému zhoršení situace na pozemku p. č. 3886/6 v lokalitě Kožové hory. Podle zjištění...',
                url: 'https://www.e-kladensko.cz/zpravy/6730-tento-neporadek-nanosil-bezdomovec-na-kozovku-za-mesic-co-s-nim'
              },
              {
                title: 'Kladno uvedlo, že bezdomovec pan Víšek porušuje na Kožovce zákon o odpadech',
                media: 'e-kladensko.cz',
                date: '21. dubna 2026',
                excerpt: 'Iniciativa Les na Kožovce v ohrožení obdržel odpověď Odboru životního prostředí Magistrátu...',
                url: 'https://www.e-kladensko.cz/zpravy/6743-kladno-uvedlo-ze-bezdomovec-pan-visek-porusuje-na-kozovce-zakon-o-odpadech'
              }
            ].map((article, idx) => (
              <a 
                key={idx} 
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold text-[#4a7c2c]">{article.media}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4a7c2c] transition-colors" />
                </div>
                <h5 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#2d5016] transition-colors">
                  {article.title}
                </h5>
                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-[#4a7c2c] text-sm font-semibold group-hover:underline">
                  Přečíst celý článek →
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Jste novinář a chcete o situaci psát? Kontaktujte nás pro více informací a fotodokumentaci.</p>
            <a 
              href="mailto:info@leskozovka.cz"
              className="inline-flex items-center gap-2 bg-[#4a7c2c] hover:bg-[#5a9c3c] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Kontakt pro média
            </a>
          </div>
        </div>
      </section>

      {/* Aktéři */}
      <section id="actors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Kdo je zodpovědný a kdo trpí?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Church,
                title: 'Benediktinské arciopatství sv. Vojtěcha a sv. Markéty',
                role: 'Vlastník pozemku',
                desc: 'Zodpovídá za údržbu a zabezpečení svého majetku. Dosud nebylo přijato technické opatření proti opakovanému znečištění.',
                link: 'brevnov.cz'
              },
              {
                icon: Building2,
                title: 'Město Kladno',
                role: 'Místní samospráva',
                desc: 'Sporadicky se podílí na úklidu pozemku, avšak bez systémového řešení problému. Má pravomoc zapojit sociální služby a zvýšit kontrolu.',
                link: 'mestokladno.cz'
              },
              {
                icon: Leaf,
                title: 'ČIŽP',
                role: 'Česká inspekce životního prostředí',
                desc: 'Česká inspekce životního prostředí má pravomoc šetřit opakované porušování zákona o odpadech a uložit sankce.',
                link: 'cizp.cz'
              },
              {
                icon: Shield,
                title: 'Policie ČR / MP Kladno',
                role: 'Dozor a pořádková pravomoc',
                desc: 'Má pravomoc kontrolovat dodržování veřejného pořádku a spolupracovat s dalšími orgány při řešení nelegálního pobytu a černé skládky.',
                link: 'policie.cz'
              },
              {
                icon: Users,
                title: 'Místní obyvatelé',
                role: 'Nejvíce postižení',
                desc: 'Lidé žijící v okolí pociťují negativní dopady na kvalitu života, obavy o bezpečnost dětí a zhoršenou estetiku krajiny pro rekreaci.'
              },
              {
                icon: Bird,
                title: 'Příroda a zvěř',
                role: 'Němí postižení',
                desc: 'Kontaminace půdy, ohrožení zvířat požárem a chemikáliemi, narušení ekosystému a přirozených stanovišť volně žijících živočichů.'
              }
            ].map((actor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#4a7c2c] rounded-full flex items-center justify-center">
                  <actor.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-2">{actor.title}</h4>
                <p className="text-sm font-semibold text-gray-700 mb-3">Role: {actor.role}</p>
                <p className="text-gray-600 text-sm mb-3">{actor.desc}</p>
                {actor.link && (
                  <a 
                    href={`https://${actor.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c2c] text-sm hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {actor.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Požadavky */}
<section id="demands" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
      Naše požadavky
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
    </h2>

    <div className="space-y-6">
      {[
        { title: 'Zapojení sociálního kurátora města Kladno', desc: 'Pro práci s bezdomovcem a nabídku sociálních služeb, které by pomohly řešit příčinu problému humánně a efektivně.' },
        { title: 'Zvýšená frekvence policejních kontrol', desc: 'Minimálně 1x týdně na daném pozemku, aby se předešlo opakování problému a zajistila prevence.' },
        { title: 'Zahájení správního řízení OÚ ORP Kladno', desc: 'O černé skládce podle zákona č. 541/2020 Sb., o odpadech, s identifikací viníka a uložením sankcí.' },
        { title: 'Podnět ČIŽP k šetření opakovaného porušování', desc: 'České inspekci životního prostředí k prošetření dlouhodobého porušování zákona o odpadech.' },
        { title: 'Oplocení nebo technické zabezpečení pozemku', desc: 'Vlastník (Břevnovský klášter) by měl přijmout preventivní opatření k ochraně svého majetku a prevenci znečištění.' },
        { title: 'Prošetření požáru Hasičským záchranným sborem', desc: 'Hasičský záchranný sbor Středočeského kraje by měl vyšetřit příčinu požáru a zveřejnit výsledky.' },
        { title: 'Veřejná zpráva o výsledcích ze strany Magistrátu', desc: 'Město Kladno by mělo zveřejnit souhrnnou zprávu o přijatých opatřeních a plánovaných krocích k trvalému řešení.' },
        { title: 'Další preventivní a systémová opatření', desc: 'Přijetí konkrétních kroků k trvalému zamezení opakování situace – například instalace fotopastí nebo kamerového monitoringu pro identifikaci původců znečišťování, fyzické zábrany proti navezení odpadu do lokality (zábrany, kládový práh, kameny na vjezdech), výrazné zákazové tabule a označení zákazu rozdělávání ohně, zavedení závazné lhůty pro rychlý úklid (max. 7–14 dní od nahlášení) s jasně určeným odpovědným kontaktem na straně vlastníka i města, a vytvoření veřejného kontaktního kanálu pro hlášení incidentů s průběžnou mapou událostí. Veškerá tato opatření by měla být zakotvena v písemné dohodě mezi vlastníkem pozemku (Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze) a Magistrátem města Kladna.' }
      ].map((demand, idx) => (
        <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg hover:translate-x-2 transition-transform">
          <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center text-white font-bold text-xl">
            {idx + 1}
          </div>
          <div>
            <h5 className="text-lg font-bold text-[#2d5016] mb-2">{demand.title}</h5>
            <p className="text-gray-600">{demand.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Odkaz na podrobný dokument */}
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 flex-shrink-0 bg-white/20 rounded-full flex items-center justify-center">
            <FileDown className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-3">Podrobný dokument s požadavky</h4>
            <p className="mb-6 opacity-90 text-lg">
              Stáhněte si kompletní rozpis všech požadavků včetně právního zdůvodnění, odkazů na relevantní legislativu a konkrétních návrhů řešení.
            </p>
            <a
              href="https://drive.google.com/file/d/1Wpqf1lug1pW9y5yUEwZ3WXsfKEo6FgqB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FileDown className="w-6 h-6" />
              Stáhnout podrobné požadavky (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Oficiální dokumentace a korespondence */}
<section id="documents" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
      Oficiální dokumentace a korespondence
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      V rámci práva na informace podle zákona č. 106/1999 Sb. jsme oslovili příslušné orgány veřejné moci. Níže najdete kompletní dokumentaci včetně našich žádostí, obdržených odpovědí a dalších oficiálních dokumentů.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {[
        {
          title: 'Hasičský záchranný sbor Středočeského kraje',
          icon: Flame,
          desc: 'Dokumenty týkající se požáru ze dne 12. dubna 2025, příčiny vzniku, rozsahu škod a výsledků šetření.',
          documents: [
            {
              name: 'Žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1rNEq-7EsfFR3wjv0rL6Pj3lyl3V2M8uF/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1b99fsW9whiH_IknfYuL2zsfllMnCl0fa/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Anonymizovaná zpráva o zásahu ze dne 12.04.2025',
              url: 'https://drive.google.com/file/d/1hKqRpVnKxcweGe9U96KQ0dCZDne8a1yu/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1OpAm2yJ8aYWYvQsh94pgEM7aHYcN039W/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1O_dshKh_NYy-w09m1tH23zsGJHjsbDPi/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Žádost o informace č. 3',
              url: 'https://drive.google.com/file/d/18blsQ-xNuCJtd5y5HOWOgdzeuIN71aWo/view?usp=drive_link',
              date: 'Duben 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 3',
              url: 'https://drive.google.com/file/d/1HbCpdfozRBeMD0X95jBHWBC4KRm7aPSb/view?usp=drive_link',
              date: 'Duben 2026'
            }
          ]
        },
        {
          title: 'Statutární město Kladno',
          icon: Building2,
          desc: 'Dokumenty k úklidovým akcím, nákladům, frekvenci zásahů městské policie a nabízeným sociálním službám.',
          documents: [
            {
              name: 'Žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/19rEBC_OkAPcoZChlBINUAtuo5diqUFA7/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/17IgaIrqR9suFMBOIR4OccEo2eiewmtT1/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1kbTDsX9ZNHEWu1TqIveFdUB7tbx6R5zK/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1PNKX8yh5B3pzvvjK4XTl4PyEQFRXFwat/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Příloha č. 1 - Výpis z IS MP',
              url: 'https://docs.google.com/spreadsheets/d/1uDhxRkTx8G_bUjBvzzDIHVEyx7BgHU4o/edit?usp=drive_link&ouid=111843213503444543156&rtpof=true&sd=true',
              date: 'Březen 2026'
            },
            {
              name: 'Příloha č. 2 - Oznámení o podezření ze spáchání přestupku',
              url: 'https://drive.google.com/file/d/1U5i33ET8IFPHz0QwzoTS9UG7SVLRAPN4/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 2 (odmítnutí poskytnout informace)',
              url: 'https://drive.google.com/file/d/1oM8M64WN24IS6yTsy4N1-IbfqGVVO-KT/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Žádost o informace č. 3 (navazuje na žádost č. 1)',
              url: 'https://drive.google.com/file/d/1Rd8tfiER1zbfps6In2WhJR1epKPUXRta/view?usp=drive_link',
              date: 'Duben 2026'
            }
          ]
        },
        {
          title: 'Krajské ředitelství policie Středočeského kraje',
          icon: Shield,
          desc: 'Dokumenty týkající se zásahů Policie ČR, vedených případů a přijatých opatření v dané lokalitě.',
          documents: [
            {
              name: 'Žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1Sss8BZJHo8zKADdXz94VOCY3pVAa7uvs/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1dYwpHeTtcTc10JNtW_DZIrV9-_igPqpB/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1dRT0HSVHS87G4u4LXftZMc11JVugMhxg/view?usp=drive_link',
              date: 'Březen 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 2',
              url: 'https://drive.google.com/file/d/1Q4odsURsjczEkgUMlzcXfke9UYdASI2O/view?usp=drive_link',
              date: 'Březen 2026'
            }
          ]
        },
        {
          title: 'Česká inspekce životního prostředí',
          icon: Leaf,
          desc: 'Dokumenty k šetřením černé skládky, provedeným kontrolám a případným správním řízením.',
          documents: [
            {
              name: 'Žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1P902hUw2GKqz6Ya_o0N70l4aVxUyLgLR/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/12uHnvOZqyFt6-oP8DGxyqZN24aT-L-N7/view?usp=drive_link',
              date: 'Březen 2026'
            }
          ]
        },
        {
          title: 'Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze',
          icon: Church,
          desc: 'Žádost o součinnost a koordinaci řešení opakované černé skládky a nelegálního pobytu na lesním pozemku v lokalitě "V Kožovech" u Kladna.',
          documents: [
            {
              name: 'Dopis opatu',
              url: 'https://drive.google.com/file/d/1ZUghYdbeRKjbJS-fgO7_xm2NmW4e04kc/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Nezávislá komunikace',
              url: 'https://drive.google.com/file/d/1SfelvIvhMW8hJ5akqP2OLg_L4DQWTG9N/view?usp=drive_link',
              date: 'Duben 2026'
            }
          ]
        },
        {
          title: 'Krajská veterinární správa SVS pro Středočeský kraj',
          icon: Bird,
          desc: 'Dokumenty k výkonu veterinárního dozoru, řešení podnětů na týrání a situaci toulavých zvířat v souvislosti s opakovanou nelegální skládkou na pozemku.',
          documents: [
            {
              name: 'Žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1SKdaXXLvAwJ15atkkXxgGcMXan_ZacRw/view?usp=drive_link',
              date: 'Únor 2026'
            },
            {
              name: 'Odpověď na žádost o informace č. 1',
              url: 'https://drive.google.com/file/d/1JadCXwClc2ZQirp66EXt72O_zQGghqaE/view?usp=drive_link',
              date: 'Březen 2026'
            }
          ]
        }
      ].map((org, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center">
              <org.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="text-lg font-bold text-gray-800 mb-1">
                {org.title}
              </h5>
              <p className="text-sm text-gray-600 mb-3">
                {org.desc}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            {org.documents.map((doc, docIdx) => (
              <a
                key={docIdx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-[#f0f7eb] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#4a7c2c]" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2d5016]">
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500">{doc.date}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4a7c2c] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white">
      <div className="flex items-start gap-4">
        <Gavel className="w-8 h-8 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-xl font-bold mb-3">Právní základ žádostí</h4>
          <p className="mb-4 opacity-90 leading-relaxed">
            Všechny žádosti byly podány v souladu se <strong>zákonem č. 106/1999 Sb., o svobodném přístupu k informacím, ve znění pozdějších předpisů.</strong> Tento zákon zaručuje právo každého občana požadovat informace od státních orgánů a orgánů územní samosprávy.
          </p>
          <p className="text-sm opacity-80">
            Povinné subjekty mají zákonnou lhůtu <strong>15 dnů</strong> na poskytnutí informací nebo odůvodnění odmítnutí. Všechny obdržené odpovědi a dokumenty průběžně zveřejňujeme na tomto webu.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Oficiální podnět */}
<section id="official-motion" className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
      Oficiální podnět
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
    </h2>

    <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white mb-8">
      <div className="flex items-start gap-4">
        <Gavel className="w-8 h-8 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-bold mb-3">Komplexní podnět odeslán dne 20. 03. 2026</h3>
          <p className="opacity-95 leading-relaxed mb-3">
            Dne <strong>20. 03. 2026</strong> došlo k zaslání komplexního oficiálního podnětu, primárně adresovaného
            <strong> Magistrátu města Kladna</strong>, a současně zaslaného na vědomí dalším příslušným orgánům.
          </p>
          <a
            href="https://drive.google.com/file/d/1W4qs2eS412JGnq-_w-TSv_bB6egDD-uc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Zobrazit celé znění podnětu
          </a>
        </div>
      </div>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h4 className="text-2xl font-bold text-[#2d5016] mb-4">Adresáti na vědomí</h4>
      <ul className="space-y-3 text-gray-700 list-disc pl-6">
        <li>Ředitelství České inspekce životního prostředí, Na Břehu 267/1a, 190 00 Praha 9, IČO: 41693205, datová schránka: zr5efbb</li>
        <li>Krajská veterinární správa pro Středočeský kraj, Černoleská 1929, 256 01 Benešov, IČO: 00018562, datová schránka: d2vairv</li>
        <li>Krajská hygienická stanice Středočeského kraje se sídlem v Praze, Dittrichova 329/17, 120 00 Praha 2, IČO: 71009159, datová schránka: hhcai8e</li>
        <li>Hasičský záchranný sbor Středočeského kraje, Jana Palacha 1970, 272 01 Kladno, IČO: 70885371, datová schránka: dz4aa73</li>
        <li>Krajské ředitelství policie Středočeského kraje, Na Baních 1535, 156 00 Praha 5, IČO: 75151481, datová schránka: 2dtai5u</li>
        <li>Povodí Vltavy, státní podnik, Holečkova 3178/8, 150 00 Praha 5 – Smíchov, IČO: 70889953, datová schránka: gg4t8hf</li>
        <li>Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze, Markétská 1/28, 169 00 Praha 6-Břevnov, IČO: 00408344, datová schránka: 7y4eg43</li>
      </ul>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-[#2d5016] mb-4">Právní rámec a výzva městu</h4>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Podnět byl podán v souladu s <strong>§ 42 zákona č. 500/2004 Sb., správního řádu, ve znění pozdějších předpisů</strong>,
          k prověření závažného a opakovaného porušování právních předpisů v oblasti nakládání s odpady, ochrany přírody,
          veterinární péče a ochrany veřejného zdraví v katastrálním území <strong>Kročehlavy</strong>.
        </p>
        <p>
          Vzhledem k doložené úřední nečinnosti v minulých letech žádáme věcně a místně příslušný správní orgán,
          aby z moci úřední zahájil příslušná řízení v souladu se zásadou oficiality a legality podle <strong>§ 2 správního řádu</strong>.
        </p>
        <p>
          Zároveň výslovně žádáme statutární město Kladno, aby nás v souladu s <strong>§ 42 správního řádu</strong>
          {' '}do <strong>30 dnů</strong> od obdržení podnětu informovalo o tom, jaká konkrétní opatření byla přijata a jaká řízení byla zahájena.
        </p>
      </div>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-[#2d5016] mb-4">Odpovědi na podnět</h4>
      <div className="space-y-6">
        <div className="border-l-4 border-[#4a7c2c] pl-6">
          <h5 className="text-lg font-semibold text-[#2d5016] mb-2">Povodí Vltavy, státní podnik</h5>
          <p className="text-gray-600 mb-2">Odpověď doručena dne <strong>13. 04. 2026</strong></p>
          <a
            href="https://drive.google.com/file/d/1LA6_a8KCz6nXvcO4Y4ZgbQAs_pPe7IN4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Zobrazit odpověď
          </a>
        </div>
        <div className="border-l-4 border-[#4a7c2c] pl-6">
          <h5 className="text-lg font-semibold text-[#2d5016] mb-2">Magistrát města Kladna, Odbor sociální</h5>
          <p className="text-gray-600 mb-2">Odpověď doručena dne <strong>14. 04. 2026</strong></p>
          <a
            href="https://drive.google.com/file/d/16-JxhZBPzbjtDh09FoID1jrwgIDHd2tl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Zobrazit odpověď
          </a>
        </div>
        <div className="border-l-4 border-[#4a7c2c] pl-6">
          <h5 className="text-lg font-semibold text-[#2d5016] mb-2">Magistrát města Kladna, Odbor životního prostředí</h5>
          <p className="text-gray-600 mb-2">Odpověď doručena dne <strong>20. 04. 2026</strong></p>
          <a
            href="https://drive.google.com/file/d/1-9miOL7IrOpJqXEMNXTgK_OkvaEmRxt0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Zobrazit odpověď
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Petice */}
      <section id="petition" className="py-24 bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Podpořte nás — podepište petici</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            Váš podpis znamená tlak na odpovědné instituce. Pomozte ochránit přírodu, zajistit důstojné řešení pro všechny zúčastněné a ukázat, že nečinnost není akceptovatelná. Každý hlas se počítá!
          </p>
          <a 
            href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e67e22] hover:bg-[#d35400] px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:-translate-y-2 shadow-2xl uppercase tracking-wide"
          >
            <PenLine className="w-6 h-6" />
            Podepsat petici
          </a>
          <p className="mt-4 text-sm opacity-80">
            Petice je umístěna na externí platformě. Kliknutím budete přesměrováni.
          </p>
          <div className="mt-8 inline-block bg-white/20 px-6 py-3 rounded-full">
            <Users className="inline w-5 h-5 mr-2" />
            Buďte mezi prvními, kdo podpoří změnu!
          </div>
        </div>
      </section>

      {/* Aktuality z Facebooku */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Aktuality z Facebooku
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="flex justify-center">
                <div className="w-full max-w-[500px] rounded-lg overflow-hidden bg-white shadow-md">
                  {activeFacebookPost?.embedEnabled !== false && activeFacebookPost?.src ? (
                    <iframe
                      src={activeFacebookPost.src}
                      title={`Facebook post ${activeFacebookIndex + 1}`}
                      width="100%"
                      height={FACEBOOK_EMBED_HEIGHT}
                      className="block w-full mx-auto"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    <div className="min-h-[320px] flex flex-col items-center justify-center text-center px-6 py-10 bg-gray-50">
                      <Facebook className="w-10 h-10 text-[#2d5016] mb-4" />
                      <p className="text-gray-700 font-semibold mb-2">
                        Facebook omezuje náhled tohoto příspěvku.
                      </p>
                      <p className="text-sm text-gray-600 mb-6">
                        Otevřete jej přímo na Facebooku.
                      </p>
                      <a
                        href={activeFacebookPost.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2d5016] hover:bg-[#3d6a1f] text-white px-4 py-2.5 rounded-full font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Otevřít příspěvek na Facebooku
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4">
                <button
                  onClick={prevFacebookPost}
                  aria-label="Předchozí Facebook post"
                  className="w-10 h-10 rounded-full bg-gray-100 text-[#2d5016] shadow hover:bg-gray-200 transition-colors"
                >
                  ‹
                </button>
                <span className="text-sm font-medium text-gray-600 min-w-[96px] text-center">
                  {activeFacebookIndex + 1} / {facebookPosts.length}
                </span>
                <button
                  onClick={nextFacebookPost}
                  aria-label="Další Facebook post"
                  className="w-10 h-10 rounded-full bg-gray-100 text-[#2d5016] shadow hover:bg-gray-200 transition-colors"
                >
                  ›
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Příspěvky jsou spravované ručně a řazené od nejstaršího po nejnovější.
                </p>
                <a
                  href={activeFacebookPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2d5016] font-semibold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Otevřít aktuální příspěvek
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
      Kontakt a organizátoři
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
    </h2>

    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h4 className="text-2xl font-bold text-[#2d5016] mb-6">Kontaktní informace</h4>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">Organizátor:</strong>
                Ing. Dominik Žlebek, LL.M.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">E-mail pro média a úřady:</strong>
                <a href="mailto:info@leskozovka.cz" className="text-[#4a7c2c] hover:underline">info@leskozovka.cz</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">Lokace problému:</strong>
                Parcela č. 3830/4 | k.ú. Kročehlavy [665126]<br />
                Nově také: Parcela č. 3886/6 | k.ú. Kročehlavy [665126]<br />
                Vlastník: Benediktinské arciopatství sv. Vojtcha a sv. Markéty v Praze
              </div>
            </div>
          </div>

          <h5 className="text-xl font-bold text-[#2d5016] mt-8 mb-4">Sledujte nás</h5>
          <div className="flex gap-3">
            {[
              { icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61587817198306' },
              { icon: Youtube, link: 'https://www.youtube.com/@leskozovka' },
              { icon: Mail, link: 'mailto:info@leskozovka.cz' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a7c2c] hover:bg-[#5a9c3c] rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-bold text-[#2d5016] mb-4">Kde se problém nachází</h4>
        <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
          <MapContainer
            center={[50.1263355, 14.108134]}
            zoom={17}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />

            <CircleMarker
              center={[50.1262367, 14.1089158]}
              radius={8}
              pathOptions={{ color: '#2d5016', fillColor: '#4a7c2c', fillOpacity: 0.9 }}
            >
              <Popup>Parcela č. 3830/4</Popup>
            </CircleMarker>

            <CircleMarker
              center={[50.1264344, 14.1073522]}
              radius={8}
              pathOptions={{ color: '#2d5016', fillColor: '#4a7c2c', fillOpacity: 0.9 }}
            >
              <Popup>Parcela č. 3886/6</Popup>
            </CircleMarker>
          </MapContainer>
        </div>
        <p className="text-center text-gray-500 text-sm mt-2">GPS souřadnice: 50.1262367N, 14.1089158E · 50.1264344N, 14.1073522E</p>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 text-sm opacity-90 leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              <strong>O tomto webu:</strong> Tento web je nekomerční iniciativou občanů v zájmu ochrany přírody a řešení opakovaného problému černé skládky u Kladna. Web slouží k informování veřejnosti, médií a orgánů veřejné moci. Veškeré informace jsou založeny na reálných událostech a dokumentaci.
            </p>
            <p>
              Petice je realizována v souladu se zákonem č. 85/1990 Sb., o právu petičním, ve znění pozdějších předpisů.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {[
              { label: 'O webu', onClick: () => scrollToSection('home') },
              { label: 'Kontakt', onClick: () => scrollToSection('contact') }
            ].map((link, idx) => (
              <button 
                key={idx}
                onClick={link.onClick}
                className="hover:text-[#a8d08d] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="text-center text-sm opacity-80 pt-8 border-t border-white/10">
            <p>&copy; 2026 Ing. Dominik Žlebek, LL.M. Všechna práva vyhrazena.</p>
            <p className="mt-2">Web vytvořen s podporou dobrovolníků a aktivních občanů.</p>
          </div>
        </div>
      </footer>

      {/* Floating Petition Button */}
      {showFloatingButton && (
        <a 
          href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#e67e22] hover:bg-[#d35400] rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-110 z-50 text-[xs] font-semibold"
        >
          <PenLine className="w-6 h-6 mb-1" />
          Petice
        </a>
      )}
    </div>
  );
}
