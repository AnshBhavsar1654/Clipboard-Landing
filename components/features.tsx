import {
  ArrowLeftRight,
  ClipboardList,
  Files,
  Keyboard,
  QrCode,
  Search,
} from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const FEATURES = [
  {
    icon: ArrowLeftRight,
    title: "Bidirectional sync",
    body: "Copy on your PC and paste on your phone. Copy on your phone and press Ctrl+V on your PC. Both directions, in real time.",
  },
  {
    icon: QrCode,
    title: "Zero-setup pairing",
    body: "One QR scan opens the live dashboard in any mobile browser. No app to install on your phone, no pairing codes.",
  },
  {
    icon: ClipboardList,
    title: "Searchable history",
    body: "ClipBoardSync keeps a clean clipboard feed with live search (Ctrl+K), pinning, and a dedicated Files view.",
  },
  {
    icon: Files,
    title: "Text, images & files",
    body: "Send any of them in either direction across your LAN — from a URL to a screenshot to a multi-megabyte document.",
  },
  {
    icon: Keyboard,
    title: "Keyboard-first",
    body: "Navigate history with arrow keys, open search with Ctrl+K, paste with Enter. Built for people who live on shortcuts.",
  },
  {
    icon: Search,
    title: "Live device status",
    body: "See connected devices at a glance with a device counter and an activity log, so sync status is never a mystery.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="A clipboard that works across all your devices"
          body="Everything you'd expect from a fast local clipboard manager, with one superpower: it's shared between your PC and your phone."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary-tint">
                  <feature.icon className="h-5 w-5 text-primary-soft" aria-hidden />
                </div>
                <h3 className="mt-5 text-base font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}