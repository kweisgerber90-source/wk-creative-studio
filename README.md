# WK Creative Studio – Produktfotografie (Würzburg)

Next.js 14 (App Router) + TypeScript + TailwindCSS + shadcn‑style UI + React Hook Form + Zod. SEO via next‑seo, dynamic sitemap/robots, env‑gated analytics (GA4/Matomo). Default locale de‑DE.

## Quickstart

```bash
pnpm i # or npm i / yarn
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Tech
- Next.js 14 App Router (TypeScript)
- TailwindCSS, accessible focus states
- UI: minimal shadcn‑like components
- Forms: React Hook Form + Zod
- SEO: next‑seo, `src/app/sitemap.xml/route.ts`, `src/app/robots.txt/route.ts`
- Analytics: GA4/Matomo gated by cookie consent
- i18n: default `de`

## Environment variables

See `.env.example`:
- `NEXT_PUBLIC_SITE_URL`: canonical base URL
- `NEXT_PUBLIC_GA4_ID`: optional GA4 Measurement ID
- `NEXT_PUBLIC_MATOMO_URL`, `NEXT_PUBLIC_MATOMO_SITE_ID`: optional Matomo
- `NEXT_PUBLIC_BRIEF_MODE`: `external` or `mock`
- `NEXT_PUBLIC_BRIEF_EXTERNAL_URL`: Tally/Typeform URL (Variant A)

## Cookie‑Banner (TTDSG/DSGVO)
- Granular Kategorien: Essenziell (immer aktiv), Analytik, Marketing
- Auswahl in `localStorage` unter `wk-consent-v1`
- Analytics laden erst nach Einwilligung (siehe `src/components/Analytics.tsx`)

## Seiten / Routen
- `/` Landing: Hero, USPs, Pakete, FAQ, CTAs
- `/services` Leistungen inkl. Rush 48h, A/B Hauptbild
- `/pricing` Preisrechner (SKU, Winkel, Rush 48h, A/B, Mini‑Video, 360°)
- `/brief` Brief (RHF+Zod)
  - Variante A: externe Weiterleitung zu Tally/Typeform via `NEXT_PUBLIC_BRIEF_EXTERNAL_URL`
  - Variante B: Mock‑API `/api/brief` mit Erfolgsmeldung (`NEXT_PUBLIC_BRIEF_MODE=mock`)
- `/portfolio` Grid mit Before/After‑Slider
- `/how-it-works` Prozess, Logistik, Verpackung, SLA
- `/login` Token‑Link Preview `?project=…&token=…` mit lokalen Kommentaren
- Rechtliches: `/impressum`, `/datenschutz`, `/agb`, `/widerruf`, `/cookies`
- `sitemap.xml`, `robots.txt`

## Daten bearbeiten
- `src/data/packages.json` – Pakete/Preise (ab‑Preise)
- `src/data/faq.json` – FAQ
- `src/data/services.json` – Leistungen
- `src/data/cases.json` – Vorher/Nachher Bilder (Dateien unter `public/images/...` ablegen)

## Moderations‑Garantie
- Statisch unter `public/garantie.html`
- Modal/Loader kann über Fetch eingebunden werden (siehe Komponenten‑TODO)

## Deployment (Vercel)
1. Repository auf GitHub/GitLab pushen
2. In Vercel importieren
3. Framework: Next.js, Root: `/`
4. Env Variablen aus `.env.example` in Vercel anlegen
5. Deploy

## Lighthouse ≥ 90 Tipps
- `next/image` verwenden, moderne Formate (WebP/AVIF)
- LCP optimieren: Hero‑Bild preloading (`priority`), kritische CSS klein halten
- Fonts via `next/font` (z. B. Inter) – display swap
- Bilder komprimieren, Größe passend wählen, Lazy Loading für nicht sichtbare Assets
- Caching‑Header durch Vercel/Next nutzen

## Lizenz / Rechtliches
- Impressum, Datenschutz, AGB, Widerruf enthalten Platzhalter. Rechtstexte ggf. juristisch prüfen lassen.
- Hinweis: Kleinunternehmer (§19 UStG) – keine USt. ausgewiesen.
