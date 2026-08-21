"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { DevicesMockup } from "@/components/devices-mockup";

export function Hero({ downloadUrl }: { downloadUrl: string | null }) {
  const reduced = useReducedMotion();

  const fade = {
    initial: reduced ? undefined : { opacity: 0, y: 12 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-8 items-center border-x border-border min-h-[calc(100vh-4rem)] lg:min-h-0 pt-16 pb-16 lg:pt-32 lg:pb-32">

          <motion.div
            {...fade}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 lg:px-12 flex flex-col justify-center"
          >
            {/* Technical readout instead of pill badge */}
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-4">
              <span>STATUS: ONLINE</span>
              <span className="text-border-strong">/</span>
              <span>LOCAL_NETWORK_ONLY</span>
            </div>

            {/* Sharp, tight typography */}
            <h1 className="text-balance text-5xl font-black tracking-tighter text-text sm:text-7xl leading-[1.1]">
              Copy on one device.<br />
              Paste on the other.
            </h1>

            <p className="mt-6 max-w-xl text-pretty font-mono text-sm leading-relaxed text-text-secondary sm:text-base">
              {">"} ClipBoardSync establishes a direct TCP connection over your local Wi-Fi.
              Text, links, and files sync bi-directionally with zero cloud mediation.
            </p>

            {/* Primary Action CTAs - sharp edges */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={downloadUrl ?? "#download"}
                className="inline-flex h-12 items-center justify-center gap-2 border-2 border-primary bg-primary px-8 text-sm font-bold text-white transition-colors hover:bg-transparent hover:text-primary cursor-pointer uppercase tracking-wider"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                GET_WINDOWS_CLIENT
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center gap-2 border-2 border-border bg-transparent px-8 text-sm font-bold text-text transition-colors hover:border-border-strong cursor-pointer uppercase tracking-wider"
              >
                VIEW_DOCS
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-text-faint">
              <span>OS: WIN_10+</span>
              <span className="h-1 w-1 bg-border-strong rounded-none" aria-hidden="true" />
              <span>MOBILE: WEB_ONLY</span>
              <span className="h-1 w-1 bg-border-strong rounded-none" aria-hidden="true" />
              <span>LICENSE: MIT</span>
            </div>
          </motion.div>

          {/* Product UI Mockup */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 lg:mt-0 px-6 lg:px-12 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] border border-border bg-surface p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <DevicesMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}