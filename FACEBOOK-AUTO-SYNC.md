# Automatické zobrazování nových příspěvků z Facebooku (Graph API + GitHub Actions)

Sekce **Aktuality z Facebooku** je nyní řešena bez Facebook iframe pluginu. Data se synchronizují do JSON souboru a web je zobrazuje jako běžné karty příspěvků.

## Jak to funguje

- Workflow [.github/workflows/facebook-sync.yml](.github/workflows/facebook-sync.yml) běží každé 3 hodiny.
- Script [scripts/sync-facebook-posts.mjs](scripts/sync-facebook-posts.mjs) stáhne příspěvky přes Facebook Graph API.
- Výsledek zapíše do [public/data/facebook-posts.json](public/data/facebook-posts.json).
- Frontend v [src/app/App.tsx](src/app/App.tsx) načte JSON a vykreslí příspěvky.

## Co musíte nastavit v GitHub Secrets

V repozitáři otevřete **Settings -> Secrets and variables -> Actions** a přidejte:

- `FB_PAGE_ID` (ID Facebook stránky)
- `FB_PAGE_ACCESS_TOKEN` (Page Access Token s oprávněním číst feed stránky)

Bez těchto dvou secrets synchronizace neproběhne.

## Ruční spuštění synchronizace

- V GitHubu otevřete **Actions -> Sync Facebook Posts -> Run workflow**.
- Po doběhnutí workflow se aktualizuje [public/data/facebook-posts.json](public/data/facebook-posts.json).

## Výhody tohoto řešení

- žádné točící se kolečko z iframe pluginu,
- plná kontrola nad vzhledem příspěvků,
- automatická aktualizace bez ručního přidávání permalinků.
