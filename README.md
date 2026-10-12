# ClipBoardSync Landing Page

Marketing landing page for [ClipBoardSync](../ClipBoardSync) — a real-time
cross-device clipboard bridge for your PC and phone over your own Wi-Fi.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** and
**framer-motion**. Single scrollable page: explain the product, build trust
(private / local / free), and drive the download.

> Read [`DESIGN.md`](./DESIGN.md) before touching the UI — it documents the
> design system, section structure, mockups, and AI implementation rules.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_GITHUB_REPO
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable                    | Purpose                                                        |
| --------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_GITHUB_REPO`   | `"owner/repo"` hosting the releases. Drives version/size/URL.  |
| `NEXT_PUBLIC_SITE_URL`      | Canonical domain for metadata, `robots.txt`, and `sitemap.xml`.|

If the repo is not configured, the page renders with placeholder download info
and never breaks the build.

## Download integration

`lib/release.ts` fetches the latest release from the GitHub API
(`/repos/{owner}/{repo}/releases/latest`), picks the `ClipBoardSync` installer (`.exe`)
asset, and exposes version / size / download URL / release date. The fetch is
cached for 1 hour (ISR). See [`DESIGN.md`](./DESIGN.md#download-integration).

## Project structure

```
app/                 Routes, layout, metadata (page.tsx, layout.tsx, globals.css, robots.ts, sitemap.ts)
components/          Section components (nav, hero, devices-mockup, features, faq, download-cta, …)
lib/                 release.ts (GitHub API), format.ts, site.ts, utils.ts
public/              Logo / favicon assets
```

## Scripts

```bash
npm run dev      # development server (Turbopack)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Deploy

Deploys to [Vercel](https://vercel.com) with zero config. Set the two
environment variables above in the Vercel project settings.

To publish a new app version: tag a release on the GitHub repo and attach
`dist/ClipBoardSync.exe` (built via `python build_exe.py` in the ClipBoardSync
repo). The landing page picks it up within an hour.