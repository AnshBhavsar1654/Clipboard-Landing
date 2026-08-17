import { CloudOff, ShieldCheck, Wifi, Zap } from "lucide-react";
import { Reveal } from "@/components/anim";

const VALUES = [
  {
    icon: CloudOff,
    title: "No cloud",
    body: "Everything stays on your Wi-Fi router. Your clipboard never touches a third-party server.",
  },
  {
    icon: ShieldCheck,
    title: "No accounts",
    body: "No sign-up, no login, no telemetry. Just run the app and scan a QR code.",
  },
  {
    icon: Zap,
    title: "Real-time sync",
    body: "Copy on one device and paste on the other in under a second — text, images, and files.",
  },
  {
    icon: Wifi,
    title: "Works offline",
    body: "Fully functional with zero internet. A local clipboard bridge, nothing more.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 0.06} className="p-5">
            <value.icon
              className="h-5 w-5 text-primary-soft"
              aria-hidden
            />
            <h3 className="mt-3 text-sm font-semibold text-text">
              {value.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
              {value.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}