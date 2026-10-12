# ClipBoardSync Landing Page — Design System

## Product Overview

This repo is the **marketing landing page** for [ClipBoardSync](https://github.com/) — a lightweight cross-device clipboard utility that syncs text, images, and files between a Windows PC and any phone over the local Wi-Fi network.

The page is a **single scrollable landing page** whose core purposes are:

1. Clearly explain what the app does in seconds to a regular end user.
2. Build trust that it is **fast, safe, private, minimal, and completely free**.
3. Provide a direct download for `ClipBoardSync.exe` (hosted on GitHub Releases).

---

## Design principles

* **Match the app.** Colors, radii and tone come from the ClipBoardSync desktop window: soft canvas, white cards, one indigo accent, sentence case everywhere.
* **Plain language.** Copy says what happens for the user ("Copy on your PC, paste on your phone"), never protocol jargon or terminal-style labels.
* **Only true claims.** Every number and promise must match the app: 2 GB per file, 1 GB per folder, Windows 10/11, plain HTTP on the LAN (say so), password-manager clips skipped by default. No invented latency or "no limits" claims, and no license claim until the app repo has a LICENSE file.
* **Real product UI.** The hero mockup mirrors the desktop window (sidebar, status card, clip cards) and the two-computers section mirrors the Connect dialog.
* **Calm motion.** Reveal-on-scroll and one looping sync animation; all of it respects `prefers-reduced-motion`.
* **Light and dark.** Both themes use the tokens below; avoid hard-coded colors.

---

## Visual Design Tokens

### Color palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg` | `#f5f6fa` | `#0f1116` | Page background |
| `--bg-subtle` | `#eceef4` | `#13151c` | Alternate sections, footer |
| `--surface` | `#ffffff` | `#181b23` | Cards, panels, mockups |
| `--surface-raised` | `#f1f3f8` | `#20242e` | Nested panels, hover |
| `--border` | `#e1e4ec` | `#272c38` | Hairlines |
| `--text` | `#151826` | `#eef0f6` | Headings, primary text |
| `--text-secondary` | `#5d6579` | `#a2a9bb` | Body copy |
| `--text-faint` | `#8a91a3` | `#727a8e` | Captions |
| `--primary` | `#4a63e7` | `#7d92ff` | Buttons, accents (`--primary-ink` for text on it) |
| `--success` | `#138a5b` | `#4cd698` | Connected / safe |
| `--warn` | `#a15c07` | `#f0b24a` | File tiles |

---

## Page Structure

Single route `/`:

1. **Nav** (`nav.tsx`): logo, section links, theme toggle, Download.
2. **Hero** (`hero.tsx`, `devices-mockup.tsx`): headline, subhead, CTAs, animated desktop-window + phone mockup.
3. **Value strip** (`value-strip.tsx`): four short facts.
4. **How it works** (`how-it-works.tsx`): install, scan once, copy and paste.
5. **Features** (`features.tsx`): bento grid (two-way sync, no phone app, searchable history, quick paste, light/dark, files and folders).
6. **Two computers** (`two-computers.tsx`): PC-to-PC linking with the Connect dialog preview.
7. **Privacy** (`privacy.tsx`): pairing, no cloud, private clips skipped, local history, plus the honest "LAN traffic is not encrypted" note.
8. **FAQ** (`faq.tsx`): accordion.
9. **Download** (`download-cta.tsx`): version, size and date from the latest GitHub release.
10. **Footer** (`footer.tsx`): links and Privacy / Terms modals (`legal-modal.tsx`).
