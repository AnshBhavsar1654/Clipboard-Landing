import { Download, Check, Shield } from "lucide-react";
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

  return (
    <section id="download" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3.5 py-1 text-xs font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>Version {release.version}</span>
              <span className="text-border-strong">·</span>
              <span>Free &amp; Open Source</span>
            </div>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Start syncing across your devices today
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-text-secondary">
              Download the portable app for Windows 10 and 11. No installer required — just open it and scan the QR code to begin.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <a
                href={release.url ?? "#"}
                aria-disabled={!hasAsset}
                className={
                  hasAsset
                    ? "inline-flex items-center gap-2.5 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-xs transition-colors hover:bg-primary-soft cursor-pointer"
                    : "inline-flex cursor-not-allowed items-center gap-2.5 rounded-lg bg-border px-8 py-4 text-base font-semibold text-text-faint"
                }
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download for Windows
              </a>

              {/* Release Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-faint">
                <span>{formatBytes(release.size ?? 18400000)} · Portable .exe</span>
                {release.publishedAt && (
                  <span>Updated {formatDate(release.publishedAt)}</span>
                )}
                {githubRepo && (
                  <a
                    href={`https://github.com/${githubRepo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text"
                  >
                    <GithubIcon size={13} aria-hidden="true" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-secondary border-t border-border pt-6">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" />
                No setup or installer
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" />
                Works 100% offline
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" />
                Zero data collected
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}