"use client";

import { useState } from "react";
import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";
import { LegalModal, type LegalModalType } from "@/components/legal-modal";

interface FooterProps {
  githubRepo?: string;
}

const LINK = "transition-colors hover:text-text";

export function Footer({ githubRepo }: FooterProps) {
  const [modalType, setModalType] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="border-t border-border bg-bg-subtle">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Logo />
            <span className="text-sm text-text-faint">Copy on one device. Paste on the other.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-secondary">
            <a href="#how-it-works" className={LINK}>How it works</a>
            <a href="#features" className={LINK}>Features</a>
            <a href="#faq" className={LINK}>FAQ</a>
            {githubRepo && (
              <a
                href={`https://github.com/${githubRepo}`}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 ${LINK}`}
              >
                <GithubIcon size={14} aria-hidden="true" />
                GitHub
              </a>
            )}
            <button type="button" onClick={() => setModalType("privacy")} className={`cursor-pointer ${LINK}`}>
              Privacy
            </button>
            <button type="button" onClick={() => setModalType("terms")} className={`cursor-pointer ${LINK}`}>
              Terms
            </button>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-text-faint sm:flex-row">
            <span>ClipBoardSync. Free to use.</span>
            <span className="flex items-center gap-1.5 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Stays on your Wi-Fi
            </span>
          </div>
        </div>
      </footer>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
}
