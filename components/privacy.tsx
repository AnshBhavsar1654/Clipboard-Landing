"use client";

import { Laptop, Phone, ShieldCheck, Check, X, Wifi } from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const COMPARISON_ROWS = [
  {
    feature: "Where your data travels",
    local: "Directly over your own Wi-Fi router",
    cloud: "Uploaded to third-party cloud servers",
  },
  {
    feature: "Internet required to sync?",
    local: "No — works 100% offline on your home network",
    cloud: "Yes — always depends on an active internet connection",
  },
  {
    feature: "Accounts & Sign-ups",
    local: "None — no email, no password, no tracking",
    cloud: "Mandatory account creation and email login",
  },
  {
    feature: "Who can see your clipboard?",
    local: "Only you on your connected devices",
    cloud: "Stored on external databases and cloud servers",
  },
  {
    feature: "Cost & Open Source",
    local: "100% Free & Open Source (MIT License)",
    cloud: "Often requires monthly subscriptions",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 py-20 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Privacy & Security"
          title="Your clipboard never leaves your home Wi-Fi"
          body="Most clipboard tools upload your passwords, private links, and sensitive notes to company servers. ClipBoardSync keeps everything strictly between your PC and phone."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Simple Visual Diagram */}
          <div className="lg:col-span-5 rounded-xl border border-border bg-surface p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-semibold text-text uppercase tracking-wider">
                Direct Home Network Sync
              </span>
              <span className="flex items-center gap-1.5 text-xs text-success font-medium">
                <span className="h-2 w-2 rounded-full bg-success" />
                Safe &amp; Private
              </span>
            </div>

            <div className="my-6 space-y-4">
              {/* PC Node */}
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-raised p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-secondary">
                    <Laptop className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-text">Your Windows PC</div>
                    <div className="text-[11px] text-text-faint">ClipBoardSync App</div>
                  </div>
                </div>
                <span className="rounded-full bg-surface-overlay border border-border px-2.5 py-0.5 text-[10px] font-medium text-text-faint">
                  PC
                </span>
              </div>

              {/* Direct Wi-Fi Bridge Indicator */}
              <div className="flex items-center justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-px border-l border-dashed border-border-strong" />
                  <div className="flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3.5 py-1 text-xs font-medium text-text-secondary shadow-xs">
                    <Wifi className="h-3.5 w-3.5 text-primary-soft" />
                    <span>Your Local Wi-Fi (No cloud)</span>
                  </div>
                  <div className="h-3 w-px border-l border-dashed border-border-strong" />
                </div>
              </div>

              {/* Phone Node */}
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-raised p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-secondary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-text">Your Phone</div>
                    <div className="text-[11px] text-text-faint">Mobile Browser (iOS / Android)</div>
                  </div>
                </div>
                <span className="rounded-full bg-surface-overlay border border-border px-2.5 py-0.5 text-[10px] font-medium text-text-faint">
                  Phone
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-raised p-3.5 text-xs text-text-secondary">
              <div className="flex items-center gap-2 font-semibold text-text">
                <ShieldCheck className="h-4 w-4 text-success" />
                <span>Zero Data Collection</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-text-faint">
                ClipBoardSync contains no tracking scripts, ads, or analytics. Your copied text stays strictly in your hands.
              </p>
            </div>
          </div>

          {/* Clean Comparison Matrix */}
          <div className="lg:col-span-7 rounded-xl border border-border bg-surface shadow-xs overflow-hidden">
            <div className="border-b border-border bg-surface-raised px-5 py-3.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-text">
                ClipBoardSync vs Cloud Clipboard Apps
              </span>
            </div>

            <div className="divide-y divide-border">
              {COMPARISON_ROWS.map((row) => (
                <div key={row.feature} className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-text mb-2.5">
                    {row.feature}
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
                    <div className="flex items-start gap-2 rounded-lg bg-success-tint border border-success/20 p-2.5 text-text">
                      <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-success block text-[11px]">
                          ClipBoardSync
                        </span>
                        <span className="text-xs text-text-secondary">{row.local}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-surface-raised border border-border p-2.5 text-text-faint">
                      <X className="h-4 w-4 text-text-faint shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-text-faint block text-[11px]">
                          Other Cloud Apps
                        </span>
                        <span className="text-xs text-text-faint">{row.cloud}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}