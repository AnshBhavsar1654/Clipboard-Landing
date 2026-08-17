import { Download, FileArchive } from "lucide-react";
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
    <section id="download" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-[-160px] h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]"
              aria-hidden
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-soft">
                Get ClipBoardSync
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Copy once. Paste anywhere.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-text-secondary sm:text-base">
                Free for Windows 10 & 11. One self-contained executable — no
                installer, no dependencies, no account.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href={release.url ?? "#"}
                  aria-disabled={!hasAsset}
                  className={
                    hasAsset
                      ? "inline-flex items-center gap-2.5 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-soft"
                      : "inline-flex cursor-not-allowed items-center gap-2.5 rounded-lg bg-border px-8 py-4 text-base font-semibold text-text-faint"
                  }
                >
                  <Download className="h-5 w-5" aria-hidden />
                  Download ClipBoardSync.exe
                </a>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <FileArchive className="h-3.5 w-3.5" aria-hidden />
                    {formatBytes(release.size ?? 0)} · .exe
                  </span>
                  <span>Version {release.version}</span>
                  {release.publishedAt && (
                    <span>Released {formatDate(release.publishedAt)}</span>
                  )}
                  {githubRepo && (
                    <a
                      href={`https://github.com/${githubRepo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-text-secondary transition-colors hover:text-text"
                    >
                      <GithubIcon size={14} aria-hidden />
                      View source
                    </a>
                  )}
                </div>
              </div>

              <p className="relative mt-10 text-xs leading-relaxed text-text-faint">
                Works fully offline · No cloud · No accounts · Free forever
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}