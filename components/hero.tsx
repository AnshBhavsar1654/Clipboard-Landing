"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { DevicesMockup } from "@/components/devices-mockup";

export function Hero({ downloadUrl }: { downloadUrl: string | null }) {
  const reduced = useReducedMotion();

  const fade = {
    initial: reduced ? undefined : { opacity: 0, y: 16 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-240px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <motion.div
          {...fade}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-primary/50 hover:text-text"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            Free · Open source · Works offline
            <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" aria-hidden />
          </a>

          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
            Copy once.
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
              Paste anywhere.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            ClipBoardSync bridges your Windows PC and phone over your own Wi-Fi.
            Text, images, and files sync in real time, in both directions — no
            cloud, no accounts, no setup beyond a QR scan.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={downloadUrl ?? "#download"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-soft sm:w-auto"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download for Windows
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface-raised sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-faint">
            <span>Windows 10 / 11</span>
            <span aria-hidden>·</span>
            <span>No phone app needed</span>
            <span aria-hidden>·</span>
            <span>Runs entirely on your network</span>
          </div>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <DevicesMockup />
        </motion.div>
      </div>
    </section>
  );
}