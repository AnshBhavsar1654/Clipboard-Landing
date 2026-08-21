"use client";

import { useState } from "react";
import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";
import { LegalModal, type LegalModalType } from "@/components/legal-modal";

interface FooterProps {
  githubRepo?: string;
}

export function Footer({ githubRepo }: FooterProps) {
  const [modalType, setModalType] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="border-t border-border bg-surface-raised/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-xs text-text-faint">
              Simple, private cross-device clipboard sync.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-text-secondary">
            {githubRepo && (
              <a
                href={`https://github.com/${githubRepo}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
              >
                <GithubIcon size={14} aria-hidden="true" />
                GitHub
              </a>
            )}
            <a href="#how-it-works" className="transition-colors hover:text-text">
              How it works
            </a>
            <a href="#features" className="transition-colors hover:text-text">
              Features
            </a>
            <a href="#faq" className="transition-colors hover:text-text">
              FAQ
            </a>
            <button
              type="button"
              onClick={() => setModalType("privacy")}
              className="cursor-pointer transition-colors hover:text-text"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalType("terms")}
              className="cursor-pointer transition-colors hover:text-text"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-text-faint sm:flex-row">
            <span>
              ClipBoardSync · Free &amp; Open Source Software (MIT License)
            </span>
            <span className="flex items-center gap-1.5 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              100% Private on your Wi-Fi
            </span>
          </div>
        </div>
      </footer>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
}