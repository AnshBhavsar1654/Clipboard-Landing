import { Download } from "lucide-react";
import { formatBytes, formatDate } from "@/lib/format";
import type { ReleaseInfo } from "@/lib/release";
import { GithubIcon } from "@/components/github-icon";
import { Reveal } from "@/components/anim";

interface DownloadCtaProps {
  release: ReleaseInfo;
  githubRepo?: string;
}

export function DownloadCta({ release, githubRepo }: DownloadCtaProps) {
  const hasAsset = Boolean(release.url);
  const details = [
    `Version ${release.version}`,
    release.size ? formatBytes(release.size) : null,
    release.publishedAt ? `Released ${formatDate(release.publishedAt)}` : null,
    "Windows 10 and 11",
  ].filter(Boolean);

  return (
    <section id="download" className="scroll-mt-20 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="shadow-card overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-text sm:text-5xl">
              Share your first clip in a minute
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
              Free for Windows. Install it, scan the code with your phone, and start copying.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href={release.url ?? "#"}
                aria-disabled={!hasAsset}
                className={
                  hasAsset
                    ? "inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-primary px-8 text-base font-semibold text-primary-ink transition-[filter] hover:brightness-110"
                    : "inline-flex h-14 cursor-not-allowed items-center justify-center gap-2.5 rounded-xl bg-surface-overlay px-8 text-base font-semibold text-text-faint"
                }
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {hasAsset ? "Download for Windows" : "Download coming soon"}
              </a>

              <p className="text-sm text-text-faint">{details.join(" · ")}</p>

              {githubRepo && (
                <a
                  href={`https://github.com/${githubRepo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text"
                >
                  <GithubIcon size={14} aria-hidden="true" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
