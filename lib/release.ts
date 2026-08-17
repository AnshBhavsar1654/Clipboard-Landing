export interface ReleaseInfo {
  tag: string;
  version: string;
  size: number | null;
  url: string | null;
  publishedAt: string | null;
  name: string;
  notes: string;
}

const FALLBACK_RELEASE: ReleaseInfo = {
  tag: "v0.1.0",
  version: "0.1.0",
  size: null,
  url: null,
  publishedAt: null,
  name: "ClipBoardSync",
  notes: "",
};

interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string | null;
  assets: GitHubAsset[];
}

/**
 * Fetch the latest GitHub release and find the Windows installer asset.
 * Never throws — on any failure it returns a safe fallback so the page
 * always renders. Cached for 1 hour (ISR revalidation).
 */
export async function getRelease(): Promise<ReleaseInfo> {
  const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;
  if (!repo || !/^[^/]+\/[^/]+$/.test(repo)) {
    return FALLBACK_RELEASE;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return FALLBACK_RELEASE;

    const data = (await res.json()) as GitHubRelease;
    const exe = data.assets.find(
      (asset) =>
        asset.name.toLowerCase().endsWith(".exe") &&
        /clipboardsync/i.test(asset.name),
    );

    const version = data.tag_name.replace(/^v/, "");
    const notes = data.body
      ? data.body.replace(/<!--[\s\S]*?-->/g, "").trim()
      : "";

    return {
      tag: data.tag_name,
      version: version || FALLBACK_RELEASE.version,
      size: exe?.size ?? null,
      url: exe?.browser_download_url ?? null,
      publishedAt: data.published_at ?? null,
      name: data.name?.replace(/^v/, "") || `ClipBoardSync ${version}`,
      notes,
    };
  } catch {
    return FALLBACK_RELEASE;
  }
}
