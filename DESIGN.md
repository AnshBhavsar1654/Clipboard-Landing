# ClipBoardSync Landing Page — Design System

## Product Overview

This repo is the **marketing landing page** for [ClipBoardSync](https://github.com/) — a lightweight cross-device clipboard utility that syncs text, images, and files between a Windows PC and any phone over the local Wi-Fi network.

The page is a **single scrollable landing page** whose core purposes are:

1. Clearly explain what the app does in seconds to a regular end user.
2. Build trust that it is **fast, safe, private, minimal, and completely free**.
3. Provide a direct download for `ClipBoardSync.exe` (hosted on GitHub Releases).

---

## Design Principles: Avoiding "Vibe-Coded" Traps

The landing page follows strict, modern design standards designed to avoid generic AI-generated templates:

* **No harsh rainbow / multi-color gradients** — crisp, high-contrast, perfectly kerned typography instead of cliché gradient text.
* **No floating glowing orbs or ambient blurred blobs** — grounded, deliberate canvas tones with clear structure.
* **No generic dot-grid backgrounds** — clean surfaces with hairline borders (`1px`).
* **Authentic Windows Desktop UI** — Windows 11 window controls (minimize, maximize, close) rather than generic macOS traffic lights.
* **Light & Dark Mode Support** — balanced light mode (clean off-white `#f8fafc` canvas, never blinding flat white) and deep dark mode (`#0b0f17`).
* **No Repetitive Cookie-Cutter Cards** — bespoke asymmetric product feature showcases instead of rows of identical icon boxes.
* **Essential Legal Compliance** — includes working, dedicated Privacy Policy and Terms of Service modal dialogs for local LAN utility software.
* **Clear, User-Centric Copy** — focus on outcomes ("Copy on your PC, paste on your phone") rather than internal socket protocols.

---

## Visual Design Tokens

### Color Palette

| Token | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| `--bg` | `#f8fafc` | `#0b0f17` | Page background |
| `--surface` | `#ffffff` | `#131b2e` | Cards, panels, mockups |
| `--surface-raised` | `#f8fafc` | `#1a243b` | Nested panels, hover states |
| `--border` | `#e2e8f0` | `#23304b` | Hairline borders (1px) |
| `--border-strong` | `#cbd5e1` | `#334466` | Border on hover / emphasis |
| `--text` | `#0f172a` | `#f1f5f9` | Primary headings & text |
| `--text-secondary` | `#475569` | `#94a3b8` | Body text & descriptions |
| `--text-faint` | `#94a3b8` | `#64748b` | Captions, metadata, icons |
| `--primary` | `#4338ca` | `#6366f1` | Primary buttons, accent |
| `--primary-soft` | `#4f46e5` | `#818cf8` | Highlight text, hover states |
| `--success` | `#16a34a` | `#22c55e` | Connected / online status |

---

## Page Structure

Single route `/`:

1. **Header / Nav** (`components/nav.tsx`): Logo, navigation links, Theme Toggle (Light/Dark), Download button.
2. **Hero** (`components/hero.tsx` + `components/devices-mockup.tsx`): Headline, subheadline, CTAs, interactive Windows & Phone mockup.
3. **Value Strip** (`components/value-strip.tsx`): Integrated hairline trust strip (100% Local Wi-Fi, Sub-Second Sync, Zero Phone Setup, Text & Files).
4. **How It Works** (`components/how-it-works.tsx`): 3 simple steps (Open on PC → Scan QR → Copy & Paste).
5. **Features** (`components/features.tsx`): Asymmetric capability showcase with real UI previews.
6. **FAQ** (`components/faq.tsx`): Accessible accordion addressing common questions.
7. **Download CTA** (`components/download-cta.tsx`): Clean download card with version metadata.
8. **Footer** (`components/footer.tsx`): Navigation, GitHub link, and Privacy Policy / Terms of Service modal triggers.
