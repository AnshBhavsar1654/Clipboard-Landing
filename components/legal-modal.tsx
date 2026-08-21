"use client";

import { useEffect, useState } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface-raised shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-surface">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldCheck className="h-5 w-5 text-primary-soft" />
            ) : (
              <FileText className="h-5 w-5 text-primary-soft" />
            )}
            <h2 className="text-base font-semibold text-text">
              {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-text-faint hover:bg-surface-overlay hover:text-text transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-text-secondary space-y-4">
          {type === "privacy" ? (
            <>
              <p className="text-xs font-mono uppercase tracking-wider text-text-faint">
                Effective: January 2026 · Local Software Architecture
              </p>
              <h3 className="font-semibold text-text text-base">
                1. Zero Data Collection Architecture
              </h3>
              <p>
                ClipBoardSync is engineered as a strictly local utility. The software operates entirely on your local area network (LAN). No clipboard contents, device identifiers, hostnames, keystrokes, IP addresses, or telemetry data are collected, transmitted, stored, or processed by any external server or third party.
              </p>
              <h3 className="font-semibold text-text text-base">
                2. Local Network Communication
              </h3>
              <p>
                All synchronization between your Windows PC and mobile devices occurs directly via peer-to-peer HTTP and WebSocket connections on your local Wi-Fi router (default port: 8000). Traffic does not route through intermediate relays or external servers.
              </p>
              <h3 className="font-semibold text-text text-base">
                3. Ephemeral Memory and Local Persistence
              </h3>
              <p>
                Clipboard history is retained exclusively in volatile memory and local storage on your host Windows PC. No cloud synchronization accounts or remote backups exist. You can clear clipboard history at any time from within the application.
              </p>
              <h3 className="font-semibold text-text text-base">
                4. Third-Party Requests
              </h3>
              <p>
                The standalone executable makes zero outbound network requests to external domains. Updates must be downloaded manually from the official GitHub repository releases.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-mono uppercase tracking-wider text-text-faint">
                Effective: January 2026 · Open Source License
              </p>
              <h3 className="font-semibold text-text text-base">
                1. Acceptance of Terms
              </h3>
              <p>
                By downloading, compiling, or running ClipBoardSync, you agree to these Terms. ClipBoardSync is distributed as free and open-source software under the MIT License.
              </p>
              <h3 className="font-semibold text-text text-base">
                2. Intended Use and Local Network Security
              </h3>
              <p>
                ClipBoardSync is designed for use on secure, trusted private local networks (such as home or private office Wi-Fi). Because transmission is local to your subnet, you are responsible for maintaining the physical and wireless security of your local network environment.
              </p>
              <h3 className="font-semibold text-text text-base">
                3. Disclaimer of Warranty
              </h3>
              <p className="font-mono text-xs text-text-faint bg-surface p-3 rounded-lg border border-border">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              </p>
              <h3 className="font-semibold text-text text-base">
                4. Source Code and Contribution
              </h3>
              <p>
                The complete source code is available on GitHub. You are free to inspect, modify, fork, and distribute the software in compliance with the MIT License terms.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-border bg-surface px-6 py-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-surface-overlay px-4 py-2 text-xs font-semibold text-text hover:bg-border-strong transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
