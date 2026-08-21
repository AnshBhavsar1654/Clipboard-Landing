"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { DevicesMockup } from "@/components/devices-mockup";

export function Hero({ downloadUrl }: { downloadUrl: string | null }) {
  const reduced = useReducedMotion();

  const fade = {
    initial: reduced ? undefined : { opacity: 0, y: 12 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pb-24 sm:pt-20">
        <motion.div
          {...fade}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-text-secondary shadow-xs">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span>Free &amp; Open Source</span>
            <span className="text-border-strong">·</span>
            <span>Works over home Wi-Fi</span>
            <span className="text-border-strong">·</span>
            <span>No account required</span>
          </div>

          {/* Crisp, clear, friendly headline */}
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
            Copy on your PC.
            <br />
            Paste right on your phone.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            ClipBoardSync links your computer and phone over your local Wi-Fi. Text, links, screenshots, and files sync both ways instantly without going through the cloud or third-party servers.
          </p>

          {/* Primary Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={downloadUrl ?? "#download"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-primary-soft sm:w-auto cursor-pointer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download for Windows
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface-raised sm:w-auto cursor-pointer"
            >
              See how it works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-text-faint">
            <span>Windows 10 &amp; 11</span>
            <span aria-hidden="true">·</span>
            <span>No phone app to install</span>
            <span aria-hidden="true">·</span>
            <span>Completely free forever</span>
          </div>
        </motion.div>

        {/* Product UI Mockup */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <DevicesMockup />
        </motion.div>
      </div>
    </section>
  );
}