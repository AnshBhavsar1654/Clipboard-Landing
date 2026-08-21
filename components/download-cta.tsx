import { Download, Terminal } from "lucide-react";
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
    <section id="download" className="scroll-mt-20 border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-32">
        <Reveal>
          <div className="border border-border bg-surface w-full p-8 sm:p-16 lg:p-24 relative overflow-hidden group">
            
            {/* Background Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-right transition-transform duration-1000 scale-x-0 group-hover:scale-x-100" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              
              <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <Terminal className="w-3 h-3" />
                  <span>VERSION_{release.version} // READY_TO_DEPLOY</span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-text uppercase">
                  Start syncing<br/>instantly.
                </h2>
                <p className="mt-6 font-mono text-sm leading-relaxed text-text-secondary">
                  {">"} Portable Windows executable. Zero dependencies.<br/>
                  {">"} {formatBytes(release.size ?? 18400000)} download footprint.<br/>
                  {">"} Updated {formatDate(release.publishedAt ?? new Date().toISOString())}.
                </p>
              </div>

              <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4">
                <a
                  href={release.url ?? "#"}
                  aria-disabled={!hasAsset}
                  className={
                    hasAsset
                      ? "inline-flex h-16 w-full lg:w-auto items-center justify-center gap-4 border-2 border-primary bg-primary px-10 text-sm font-bold text-white transition-colors hover:bg-transparent hover:text-primary cursor-pointer uppercase tracking-widest"
                      : "inline-flex h-16 w-full lg:w-auto items-center justify-center gap-4 border-2 border-border bg-border px-10 text-sm font-bold text-text-faint cursor-not-allowed uppercase tracking-widest"
                  }
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  INITIALIZE_DOWNLOAD
                </a>

                {githubRepo && (
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={`https://github.com/${githubRepo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                    >
                      <GithubIcon size={12} aria-hidden="true" />
                      VIEW_SOURCE_ON_GITHUB
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}