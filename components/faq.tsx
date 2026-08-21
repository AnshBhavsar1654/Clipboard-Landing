"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/anim";

const FAQS = [
  {
    q: "DO I NEED AN ACTIVE INTERNET CONNECTION TO SYNC?",
    a: "Negative. ClipBoardSync operates entirely over your local Wi-Fi subnet. External internet connectivity is not required for the TCP handshake or data transfer.",
  },
  {
    q: "IS A MOBILE APP INSTALLATION REQUIRED?",
    a: "No. The desktop host serves a lightweight PWA. Scanning the generated QR code opens the interface directly in your mobile browser without app store dependencies.",
  },
  {
    q: "WHAT OPERATING SYSTEMS ARE SUPPORTED?",
    a: "Host application: Windows 10/11. Client interface: Any device with a modern web browser (iOS, Android, Linux, macOS).",
  },
  {
    q: "IS MY CLIPBOARD DATA TRANSMITTED SECURELY?",
    a: "Data never leaves your local network. It is routed peer-to-peer over your router's LAN. There are no intermediary cloud servers or third-party databases involved.",
  },
  {
    q: "IS CLIPBOARDSYNC COMPLETELY FREE?",
    a: "Yes. The software is distributed under the MIT License. No telemetry, no ads, no subscriptions.",
  },
  {
    q: "HOW DO I TROUBLESHOOT CONNECTION FAILURES?",
    a: "Ensure both devices reside on the same IP subnet. Verify that Windows Defender Firewall allows private network traffic for ClipBoardSync.exe.",
  },
];

function FaqItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-border bg-surface transition-colors hover:bg-surface-raised">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs font-bold text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-sm sm:text-base font-bold text-text tracking-tight">
            {item.q}
          </span>
        </div>
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-text transition-transform duration-300",
            open && "rotate-45 text-primary",
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-6 pl-10 pr-4">
              <p className="font-mono text-sm leading-relaxed text-text-secondary border-l-2 border-border pl-4">
                {">"} {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-32">
        <Reveal className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            // DOCUMENTATION
          </span>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tighter text-text sm:text-5xl uppercase">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 border-t border-border">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.03}>
              <FaqItem
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() =>
                  setOpenIndex((current) => (current === i ? null : i))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}