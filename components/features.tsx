import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowLeftRight,
  Search,
  Pin,
  FileImage,
  QrCode,
  Check,
  Smartphone,
  Laptop,
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28 border-b border-border bg-surface-raised/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
          body="Built to make moving text, photos, and files between your PC and phone feel as natural as copying and pasting on a single device."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {/* Feature 1: Wide Card - Two-Way Instant Sync */}
          <div className="md:col-span-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-soft">
                    Core Function
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-text sm:text-2xl">
                    Seamless Two-Way Clipboard Sync
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    Copy on your PC and paste on your phone in under a second. Or copy a link on your phone and press <kbd className="rounded border border-border bg-surface-raised px-1.5 py-0.5 text-xs font-semibold text-text">Ctrl+V</kbd> on your PC. It works in both directions without pressing extra buttons.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-success" />
                      Automatic detection
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-success" />
                      No manual refresh needed
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-xl border border-border bg-surface-raised p-4">
                  <div className="flex items-center justify-between border-b border-border pb-2.5 text-xs text-text-faint">
                    <span className="font-medium text-text">Recent Sync Activity</span>
                    <span className="flex items-center gap-1 text-success font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-2.5">
                      <div className="flex items-center gap-2.5 truncate">
                        <Smartphone className="h-4 w-4 text-primary-soft shrink-0" />
                        <span className="truncate text-text font-medium">
                          https://maps.google.com/?q=coffee-shop
                        </span>
                      </div>
                      <span className="shrink-0 text-[10px] text-text-faint">Phone → PC</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-2.5">
                      <div className="flex items-center gap-2.5 truncate">
                        <Laptop className="h-4 w-4 text-primary-soft shrink-0" />
                        <span className="truncate text-text font-medium">
                          Shipping Address: 742 Evergreen Terrace
                        </span>
                      </div>
                      <span className="shrink-0 text-[10px] text-text-faint">PC → Phone</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Feature 2: Zero Phone App Setup */}
          <div className="md:col-span-6 rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-soft">
                  Universal Compatibility
                </span>
                <h3 className="mt-2 text-lg font-bold text-text">
                  No App to Install on Your Phone
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  Works on iPhone, iPad, Android phones, and tablets. Just scan the pairing QR code with your phone camera, and the clean mobile web interface opens immediately.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface-raised p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg border border-border bg-surface flex items-center justify-center shrink-0">
                  <QrCode className="h-6 w-6 text-primary-soft" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-text">Camera Scan &amp; Pair</div>
                  <div className="text-text-faint mt-0.5">Compatible with iOS Safari, Chrome &amp; Firefox</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Feature 3: Search Clipboard History */}
          <div className="md:col-span-6 rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-soft">
                  Clipboard History
                </span>
                <h3 className="mt-2 text-lg font-bold text-text">
                  Instant Search &amp; History
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  Keep track of recently copied items. Search your history with a quick shortcut whenever you need to find a link or snippet copied earlier in the day.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface-raised p-3">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs">
                  <Search className="h-3.5 w-3.5 text-text-faint" />
                  <span className="text-text-secondary font-medium">Search history...</span>
                  <kbd className="ml-auto rounded border border-border bg-surface-raised px-1.5 py-0.5 text-[10px] font-semibold text-text-faint">
                    Ctrl + K
                  </kbd>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Feature 4: Photos & File Sharing */}
          <div className="md:col-span-6 rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-soft">
                  File Sharing
                </span>
                <h3 className="mt-2 text-lg font-bold text-text">
                  Transfer Photos, Screenshots &amp; Files
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  Stop emailing photos or documents to yourself. Drop images, PDFs, or files into ClipBoardSync to receive them on your other device immediately.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface-raised p-3.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg border border-border bg-surface flex items-center justify-center text-primary-soft">
                    <FileImage className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">screenshot-dashboard.png</div>
                    <div className="text-[11px] text-text-faint">2.4 MB · Ready to paste</div>
                  </div>
                </div>
                <span className="rounded bg-success-tint px-2 py-0.5 text-[10px] font-semibold text-success">
                  SYNCED
                </span>
              </div>
            </Reveal>
          </div>

          {/* Feature 5: Pinned Clips */}
          <div className="md:col-span-6 rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-soft">
                  Quick Access
                </span>
                <h3 className="mt-2 text-lg font-bold text-text">
                  Pin Your Frequent Snippets
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  Keep essential items pinned to the top of your clipboard. Save Wi-Fi credentials, recurring links, and frequent templates for one-tap copying.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface-raised p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
                  <span className="font-medium text-text">Wi-Fi: Home_Network_5G (Pass: winter2026)</span>
                  <Pin className="h-3.5 w-3.5 text-primary-soft shrink-0" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}