import { Download, ScanLine, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    icon: Download,
    step: "01",
    title: "Download & run",
    body: "Download ClipBoardSync.exe and double-click it. The bridge starts automatically — there's nothing to configure.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Scan the QR code",
    body: "Point your phone's camera at the QR code in the app to open the live dashboard in any mobile browser.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Copy & it syncs",
    body: "Copy anything on either device. It appears on the other instantly — text, images, or files, in both directions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From download to sync in under a minute"
          body="No accounts. No phone app to install. No configuration beyond being on the same Wi-Fi network."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <span className="pointer-events-none absolute -right-4 -top-6 select-none text-[88px] font-extrabold leading-none tracking-tighter text-text/[0.04]">
                  {step.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary-tint">
                  <step.icon className="h-5 w-5 text-primary-soft" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}