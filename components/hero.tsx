"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, ShieldCheck } from "lucide-react";
import { DevicesMockup } from "@/components/devices-mockup";

export function Hero({ downloadUrl }: { downloadUrl: string | null }) {
  const reduced = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 14 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="min-w-0">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-success" aria-hidden="true" />
            Stays on your Wi-Fi. No cloud, no account.
          </motion.p>

          <motion.h1
            {...fade(0.05)}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-text sm:text-6xl sm:leading-[1.05]"
          >
            Copy on your PC.
            <br />
            Paste on your phone.
          </motion.h1>

          <motion.p
            {...fade(0.1)}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary"
          >
            Send text, links, photos and files between your Windows computer and
            any phone. Scan one QR code and you are connected. Nothing to
            install on the phone, and nothing leaves your network.
          </motion.p>

          <motion.div {...fade(0.15)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={downloadUrl ?? "#download"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-[15px] font-semibold text-primary-ink shadow-card transition-[filter] hover:brightness-110"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download for Windows
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 text-[15px] font-semibold text-text transition-colors hover:bg-surface-raised"
            >
              See how it works
            </a>
          </motion.div>

          <motion.p {...fade(0.2)} className="mt-5 text-sm text-text-faint">
            Free · Windows 10 and 11 · Works with iPhone, Android and any browser
          </motion.p>
        </div>

        <motion.div {...fade(0.12)} className="min-w-0">
          <DevicesMockup />
        </motion.div>
      </div>
    </section>
  );
}
