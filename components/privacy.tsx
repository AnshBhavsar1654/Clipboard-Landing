"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  CloudOff,
  Laptop,
  Lock,
  Phone,
  Router,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const POINTS = [
  {
    icon: Lock,
    title: "Your data stays on your router",
    body: "ClipBoardSync routes clipboard items directly between your devices over your LAN. Nothing goes through us.",
  },
  {
    icon: CloudOff,
    title: "No accounts, no telemetry",
    body: "There's no sign-up, no cloud dashboard, and no analytics. The app is entirely self-contained.",
  },
  {
    icon: Wifi,
    title: "Works fully offline",
    body: "No internet required, ever. It's a bridge on your network — not a service you depend on.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Open source and auditable. You run the bridge yourself; there's no middleman to trust.",
  },
];

function NetworkDiagram() {
  const reduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 sm:p-10">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />

      <div className="relative flex items-center justify-between gap-2 sm:gap-6">
        <NodeCard
          icon={<Laptop className="h-5 w-5 text-text-secondary" />}
          label="Windows PC"
          sub="ClipBoardSync.exe"
        />

        <div className="flex min-w-0 flex-1 flex-col items-center px-1">
          <div className="flex w-full items-center" aria-hidden>
            <span className="h-px flex-1 border-t border-dashed border-border-strong" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-px flex-1 border-t border-dashed border-border-strong" />
          </div>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary-tint px-3 py-1 text-[11px] font-medium text-primary-soft">
            <Lock className="h-3 w-3" aria-hidden />
            Stays on your network
          </span>
        </div>

        <NodeCard
          icon={<Phone className="h-5 w-5 text-text-secondary" />}
          label="Your phone"
          sub="Any mobile browser"
        />
      </div>

      <div className="relative mt-8 flex items-center justify-center">
        <motion.div
          animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 rounded-lg border border-border bg-surface-raised px-4 py-2.5"
        >
          <Router className="h-4 w-4 text-primary-soft" aria-hidden />
          <span className="text-sm font-medium text-text">Your Wi-Fi router</span>
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        </motion.div>
      </div>

      <p className="relative mt-6 text-center text-xs text-text-faint">
        0 requests to the internet · 100% local transfer
      </p>
    </div>
  );
}

function NodeCard({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex w-28 shrink-0 flex-col items-center gap-2 rounded-lg border border-border bg-surface-raised px-2 py-3 text-center sm:w-36">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface">
        {icon}
      </span>
      <span className="text-xs font-semibold text-text">{label}</span>
      <span className="text-[10px] text-text-faint">{sub}</span>
    </div>
  );
}

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <NetworkDiagram />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Private by design"
              title="Your clipboard never leaves your network"
              body="ClipBoardSync is a local bridge, not a cloud service. There's no server to hack, no account to lose, and nothing to sync except what you actually copy."
              align="left"
            />

            <div className="mt-8 space-y-5">
              {POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary-tint">
                      <point.icon className="h-4 w-4 text-primary-soft" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-text">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}