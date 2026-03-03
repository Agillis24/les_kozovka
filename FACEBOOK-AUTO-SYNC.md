# Automatické zobrazování nových příspěvků z Facebooku (bez API)

Web je nyní nastaven tak, aby sekce **„Aktuality z Facebooku“** zobrazovala přímo timeline Facebook stránky přes oficiální Facebook Page Plugin.

## Co to znamená v praxi

- Není potřeba `FB_PAGE_ID`
- Není potřeba `FB_PAGE_ACCESS_TOKEN`
- Není potřeba GitHub Actions synchronizace JSON
- Nové příspěvky se ve vložené timeline objeví automaticky podle Facebooku

## Jak to funguje

- V komponentě [src/app/App.tsx](src/app/App.tsx) je použit iframe:
  - `https://www.facebook.com/plugins/page.php?...&tabs=timeline...`
- Plugin zobrazuje aktuální obsah přímo z Facebook stránky.

## Kdy byste API i tak chtěli

Graph API dává smysl pouze pokud chcete:

- vlastní filtraci/řazení příspěvků,
- vlastní vzhled jednotlivých postů mimo Facebook iframe,
- ukládání dat do vlastního JSON/API.

Pro běžné „chci automaticky vidět nové FB příspěvky na webu“ je Page Plugin nejjednodušší a bezúdržbová cesta.
