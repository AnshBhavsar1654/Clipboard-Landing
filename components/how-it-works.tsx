import { Download, QrCode, ArrowLeftRight, Check } from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    num: "1",
    title: "Open on your PC",
    desc: "Download ClipBoardSync for Windows and run it. No complex installer or account signup needed.",
  },
  {
    num: "2",
    title: "Scan the QR code",
    desc: "Open your phone's camera and point it at the screen. The mobile sync page opens instantly in your browser.",
  },
  {
    num: "3",
    title: "Copy & paste anywhere",
    desc: "Copy anything on your PC and paste on your phone, or copy on your phone and press Ctrl+V on your PC.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From download to syncing in under a minute"
          body="No accounts to create, no phone apps to install, and zero complicated network configurations."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <div className="relative flex flex-col h-full rounded-2xl border border-border bg-surface p-7 shadow-xs">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-text text-background text-xs font-bold">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-faint">
                    Step {step.num}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-text">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}