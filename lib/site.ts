export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clipsync.app"
).replace(/\/$/, "");

export const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO ?? "";
