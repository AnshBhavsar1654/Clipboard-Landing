"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const FAQS = [
  {
    q: "Do I need an internet connection?",
    a: "No. ClipBoardSync runs entirely over your local Wi-Fi and works fully offline. The bridge stays on your network — it never depends on an internet connection to sync.",
  },
  {
    q: "Which phones are supported?",
    a: "Any phone with a modern browser. You don't install anything on the phone — you scan the QR code shown in the desktop app and the dashboard opens in your camera or browser.",
  },
  {
    q: "Is my clipboard data stored anywhere?",
    a: "No. Clipboard items are relayed directly between your devices over your LAN and are not uploaded to any server. History lives only in the app on your PC.",
  },
  {
    q: "Does it work on macOS or Linux?",
    a: "The ready-to-run download is a Windows executable, because the native clipboard hooks are Win32-only. The sync server itself is platform-independent, so a macOS or Linux build is possible.",
  },
  {
    q: "Is ClipBoardSync really free?",
    a: "Yes — free and open source. You can download the ready-made .exe, or build it yourself from source.",
  },
  {
    q: "My phone can't open the QR link. What should I do?",
    a: "Confirm both devices are on the same Wi-Fi network and subnet, then allow ClipBoardSync through Windows Firewall for private networks (it listens on port 8000).",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${item.q}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-text sm:text-base">
          {item.q}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-text-faint transition-transform duration-200",
            open && "rotate-180 text-primary-soft",
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${item.q}`}
            role="region"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          body="The short version: it's local, private, free, and takes about a minute to set up."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <FaqItem
                item={item}
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