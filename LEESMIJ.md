# Snaar op GitHub Pages zetten

Dertig eigen songs. Werkt na de eerste keer laden volledig offline.

## Eenmalig opzetten

1. Pak de zip uit. Je krijgt tien bestanden, waaronder `.nojekyll`. Dat bestand
   is verborgen in de meeste bestandsbeheerders, maar het moet mee.
2. Maak op github.com een nieuwe repository, bijvoorbeeld `snaar`. Public is
   nodig: op een gratis account werkt Pages alleen bij publieke repositories.
3. Klik in de nieuwe repo op "uploading an existing file" en sleep alle
   bestanden erin. Niet de map zelf, de bestanden. Commit.
4. Settings, dan Pages in het linkermenu. Bij Source kies je "Deploy from a
   branch", branch `main`, map `/ (root)`. Save.
5. Wacht ongeveer een minuut. Bovenaan de Pages-pagina verschijnt het adres:
   `https://<jouwnaam>.github.io/snaar/`

## Op de telefoon

1. Open dat adres in Chrome.
2. Menu rechtsboven, dan "App installeren" of "Toevoegen aan startscherm".
3. Open Snaar vanaf het startscherm en speel een liedje. Dan weet je zeker dat
   alles is opgeslagen.

Vanaf dat moment heb je geen bereik nodig. Vliegtuigstand werkt.

## Delen

Stuur het adres. Iedereen die het opent kan hetzelfde doen: installeren en
offline spelen. Voortgang staat per toestel, er is geen gedeelde ranglijst.

## Bijwerken

1. Vervang de gewijzigde bestanden in de repo.
2. Verhoog in `sw.js` de regel `const VERSIE = "snaar-v3"` naar `snaar-v4`.

Zonder die verhoging blijven telefoons de oude versie uit hun cache halen.

## Wat zit erin

- `index.html`, `app.js`, `app.css`: de app, geen externe afhankelijkheden
- `manifest.webmanifest`: naam, icoon, staande stand, volledig scherm
- `sw.js`: de offline opslag
- vier iconen, waaronder een maskable versie voor Androids ronde iconen
- `.nojekyll`: houdt GitHub van de bestanden af

Alle dertig melodieen, akkoorden en drumpatronen zijn eigen werk. Instellingen
en voortgang worden op het toestel zelf bewaard.
