import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";

interface FooterProps {
  githubRepo?: string;
}

export function Footer({ githubRepo }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="text-xs text-text-faint">
            Real-time clipboard sync, on your network.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-text-secondary">
          {githubRepo ? (
            <a
              href={`https://github.com/${githubRepo}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
            >
              <GithubIcon size={14} aria-hidden />
              GitHub
            </a>
          ) : null}
          <a
            href="#download"
            className="transition-colors hover:text-text"
          >
            Download
          </a>
          <a href="#faq" className="transition-colors hover:text-text">
            FAQ
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-[11px] text-text-faint sm:text-left">
          ClipBoardSync — your data stays yours. No cloud. No accounts. No
          middleman.
        </p>
      </div>
    </footer>
  );
}