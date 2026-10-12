import { Download, QrCode, ClipboardPaste } from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";
import { QrMark } from "@/components/qr-mark";

const STEPS = [
  {
    icon: Download,
    title: "Install and open it",
    text: "Run the installer, or the portable version if you prefer. The app opens with a status card that says it is ready.",
  },
  {
    icon: QrCode,
    title: "Scan the code once",
    text: "Click Connect device and point your phone's camera at the QR code. Your phone opens ClipBoardSync in its browser and pairs on its own.",
  },
  {
    icon: ClipboardPaste,
    title: "Copy and paste",
    text: "Copy something on your PC and it shows up on your phone. Share from your phone and it lands on your PC, ready for Ctrl+V.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Connected in under a minute"
          body="Set it up once. After that your phone reconnects by itself whenever you are on the same Wi-Fi."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-tint text-primary">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-text-faint">Step {i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{step.text}</p>
                {i === 1 && (
                  <div className="mt-5 inline-block rounded-xl border border-border bg-white p-2">
                    <QrMark className="h-20 w-20" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
