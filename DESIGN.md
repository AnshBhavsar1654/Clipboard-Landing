# ClipBoardSync Landing Page — Design System

## Product

This repo is the **marketing landing page** for [ClipBoardSync](https://github.com/) — a lightweight cross-device clipboard utility that syncs text, images, and files between a Windows PC and any phone over the local Wi-Fi network.

The page is a **single scrollable landing page** whose only job is to:

1. Explain what the app does in seconds.
2. Make the user trust that it is **fast, minimal, native, private, and reliable**.
3. Drive the download of `ClipBoardSync.exe` (hosted on GitHub Releases).

It is a **product marketing page**, not an app dashboard. It must feel polished and intentional — **never** generic SaaS, never "vibe-coded".

---

## Design Direction

Reference the feel of premium developer-tool landing pages:

* Linear / Raycast — dark, precise, keyboard-first energy
* Figma, Vercel — strong typographic hierarchy, subtle texture
* Superhuman / Raycast — confident, minimal copy

The page shares its visual identity with the ClipBoardSync app itself. Any UI change here must stay consistent with the app's [DESIGN.md](../ClipBoardSync/DESIGN.md): **dark neutral surfaces, a single indigo accent, Inter, restrained radius, no emoji as icons.**

**Avoid:**

* Excessive gradients (a single soft indigo glow is allowed; no rainbow/multi-hue effects)
* Neon colors, glassmorphism overuse
* Huge rounded cards with soft shadows everywhere
* Generic template blocks (icon-top / text / icon-top / text grids that all look the same)
* Emoji as UI icons — use `lucide-react` vector icons
* Sloppy spacing, mismatched radii, or arbitrary one-off colors
* Stock-photo hero images — product visuals are **built in HTML/CSS** as UI mockups

---

## Visual System

### Colors (dark theme only)

Use the ClipBoardSync dark palette via CSS variables in `app/globals.css`.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#0D0F12` | Page background |
| `--surface` | `#15181D` | Cards, panels, mockups |
| `--surface-raised` | `#1C2128` | Nested panels, hover states |
| `--border` | `#292E36` | Hairline borders (1px) |
| `--border-strong` | `#3A414C` | Border on hover / emphasis |
| `--text` | `#F3F4F6` | Primary text |
| `--text-secondary` | `#9CA3AF` | Secondary text |
| `--text-faint` | `#6B7280` | Captions, meta |
| `--primary` | `#6366F1` | Accent (buttons, links, highlights) |
| `--primary-soft` | `#818CF8` | Accent text on dark, glows |
| `--primary-tint` | `rgba(99,102,241,0.12)` | Tinted fills, selection, badges |
| `--success` | `#34D399` | Connected / success states |

Do not introduce arbitrary colors. Semantic colors (success/warning/error) may be used only for actual status, never decoration.

### Typography

* **Inter** — loaded via `next/font/google` with weights 400, 500, 600, 700, 800.
* Display sizes should use tight letter-spacing (`-0.03em` to `-0.05em`) and balanced line-height.
* Hierarchy: Hero `text-5xl/6xl` → Section `text-3xl/4xl` → Subhead `text-lg/xl` → Body `text-base/sm` → Meta `text-xs/sm`.
* Body text uses `--text-secondary` by default; reserve `--text` for emphasis.
* Line length: keep paragraphs ≤ 65ch.

### Spacing

4px-based system: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.

* Section vertical padding: `py-24` to `py-32`.
* Card padding: `p-6` to `p-8`.
* Grid gaps: `gap-4` to `gap-8`.
* Container: `max-w-6xl` centered, `px-6` on mobile.

### Radius

Restrained, matching the app:

* Buttons & controls: `rounded-lg` (8px)
* Cards & panels: `rounded-xl` (12px)
* Product mockups: `rounded-xl` (12px) with 1px border + slight inner shadow

### Borders & Shadows

* Panels: `1px solid var(--border)` — crisp hairline borders are the primary "surface" treatment.
* Use `shadow` only as a subtle elevation (`shadow-lg` with `black/20` is the max) — never heavy soft shadows.
* A faint dotted/line grid background is allowed in the hero; keep it at ~4-6% opacity.

---

## Page Structure

Single route `/`. Sections in order:

| Section | Component | Notes |
|---------|-----------|-------|
| Nav | `components/nav.tsx` | Sticky, `backdrop-blur`, logo + "Download" button |
| Hero | `components/hero.tsx` + `components/devices-mockup.tsx` | Headline, subheadline, CTA, animated device mockup |
| Value strip | `components/value-strip.tsx` | 4 quick trust bullets |
| How it works | `components/how-it-works.tsx` | 3 numbered steps |
| Features | `components/features.tsx` | 6 feature items |
| Product demo | `components/demo.tsx` | Desktop GUI + phone mockup with a looping sync animation |
| Privacy | `components/privacy.tsx` | "No cloud" trust section |
| FAQ | `components/faq.tsx` | Accessible accordion |
| Download CTA | `components/download-cta.tsx` | Version/size + download button (GitHub Releases) |
| Footer | `components/footer.tsx` | Minimal |

### Copy & voice

* Tone: confident, calm, precise. Short sentences. No hype words ("revolutionary", "amazing").
* Always lead with the user's outcome, then the mechanism.
* Headline anchor: **"Copy once. Paste anywhere."**
* Trust anchors: *no cloud, no accounts, works offline, free & open source*.

---

## Product Mockups (hero & demo)

The hero and demo visuals are **hand-built UI mockups** (JSX + Tailwind), not screenshots or stock images. This is the single most important differentiator for a non-"vibe-coded" feel.

**Desktop window mockup** should mirror the real app (dark CustomTkinter):

* Slim title bar (traffic lights or window dots, title "ClipBoardSync", connected-device counter `2 devices · online`).
* A left rail: `Clipboard / Pinned / Files / Devices / Settings` (lucide icons).
* A clipboard list: 3–4 items with type icon, preview text, source device, timestamp, pin state.
* A search field with `Ctrl+K` hint.

**Phone mockup** should mirror the mobile dashboard:

* Rounded frame (`rounded-[2.5rem]`), status bar, URL bar with the `http://192.168.x.x:8000` style address.
* A small clipboard feed with 2–3 items.
* A **QR-code style graphic** (built with CSS grid blocks or an inline SVG) next to the phone for pairing.

**Sync animation** (`framer-motion`):

* A small "clipboard chip" (text preview in a rounded pill) loops between the phone and desktop.
* Draw a faint dashed connector line between the devices; animate a small packet dot along it.
* Loop `~6s`, respect `prefers-reduced-motion` (hide animation, show static state).
* Label it subtly: "Copied on phone → appears on PC".

---

## Motion

* Reveal on scroll: fade + `y: 12px` → 0, once, staggered per section (`components/anim.tsx`).
* Hover: color/border transitions (`transition-colors`), slight `y` lift on interactive cards.
* Durations: 300–500ms. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
* Never animate layout-critical elements; keep motion decorative.
* Respect `prefers-reduced-motion`: disable looping/parallax, keep reveal as instant show.

---

## Accessibility

* Semantic landmarks: `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
* All interactive elements are real `<button>`/`<a>` with visible focus states (`focus-visible:ring`).
* FAQ accordion uses buttons with `aria-expanded`, `aria-controls`, keyboard support.
* Color is never the only signal (status also gets text/label).
* Contrast: `--text-secondary` on `--bg` ≈ 7:1 — acceptable for body. Never use `--text-faint` for essential info.
* Alt text on the logo image; `aria-label` on icon-only buttons.

---

## Download Integration

Download info is fetched at build/runtime from the GitHub Releases API (`lib/release.ts`):

* Env: `NEXT_PUBLIC_GITHUB_REPO="owner/repo"` (e.g. `owner/ClipBoardSync`).
* Fetches `https://api.github.com/repos/{owner}/{repo}/releases/latest` with `next: { revalidate: 3600 }`.
* Picks the asset named `ClipBoardSync.exe`; exposes `version`, `size`, `url`, `publishedAt`.
* If the fetch fails or the repo is not configured, fall back to a placeholder and render the CTA with a sensible default — **never** break the build.
* Helper `lib/format.ts`: `formatBytes`, `formatDate`.

---

## AI Implementation Rules

When modifying this frontend:

1. Read this file first.
2. Preserve the existing design language (tokens, type scale, spacing, radii).
3. Reuse existing components and tokens; don't duplicate patterns.
4. Do not introduce arbitrary colors, fonts, icons, or styles.
5. Do not redesign unrelated parts of the page.
6. Preserve responsive behavior (mobile-first; test at 360px, 768px, 1280px).
7. Handle loading / empty / error states anywhere data is fetched.
8. Prefer simple, functional UI over decorative UI.
9. Never break the build over a failed third-party fetch (graceful fallback).
10. Follow the Next.js version docs in `node_modules/next/dist/docs/` — this repo uses a recent Next.js with breaking changes vs. training data.

---

## North Star

> **Fast. Minimal. Native. Private.** — and unmistakably ClipBoardSync.
