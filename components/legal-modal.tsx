"use client";

import { useEffect } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

const H = "text-base font-semibold text-text";

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={type === "privacy" ? "Privacy" : "Terms"}
        className="shadow-card relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            ) : (
              <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            )}
            <h2 className="text-base font-semibold text-text">
              {type === "privacy" ? "Privacy" : "Terms of use"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1.5 text-text-faint transition-colors hover:bg-surface-raised hover:text-text"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto px-6 py-6 text-sm leading-relaxed text-text-secondary">
          {type === "privacy" ? (
            <>
              <h3 className={H}>We collect nothing</h3>
              <p>
                ClipBoardSync runs on your own devices. There is no ClipBoardSync server, no account, no
                analytics and no tracking. Your clips, file names and device names are never sent to us or to
                anyone else.
              </p>
              <h3 className={H}>How your devices talk</h3>
              <p>
                Your PC and your phones (or a second PC) connect directly over your local network, by default
                on port 8000. Traffic on a local network is not encrypted, so please use ClipBoardSync only on
                networks you trust.
              </p>
              <h3 className={H}>What is stored, and where</h3>
              <p>
                Recent clips, pinned items, shared files and your paired devices are stored on your Windows PC
                only. You can delete a clip, remove a paired device, or clear all history from the app at any
                time. Clips that password managers mark as private are skipped by default.
              </p>
              <h3 className={H}>No outside requests</h3>
              <p>
                The app does not contact outside servers. To update, download the new version from the
                releases page yourself.
              </p>
            </>
          ) : (
            <>
              <h3 className={H}>Using ClipBoardSync</h3>
              <p>
                ClipBoardSync is free to use. By downloading or running it you agree to these terms. Use it on
                devices and networks you own or are allowed to use.
              </p>
              <h3 className={H}>Keep your network safe</h3>
              <p>
                Sharing happens over your local network. You are responsible for who can join that network and
                for keeping your pairing code private. Remove any device you no longer trust from Settings.
              </p>
              <h3 className={H}>No warranty</h3>
              <p className="rounded-xl border border-border bg-surface-raised p-3 text-xs">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. THE AUTHORS ARE NOT LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY ARISING
                FROM THE USE OF THE SOFTWARE.
              </p>
            </>
          )}
        </div>

        <div className="flex justify-end border-t border-border px-6 py-3">
          <button
            type="button"
            onClick={onClose}
            className="h-9 cursor-pointer rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink transition-[filter] hover:brightness-110"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
