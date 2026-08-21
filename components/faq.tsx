"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const FAQS = [
  {
    q: "Do I need an active internet connection to sync?",
    a: "No! ClipBoardSync works entirely over your local home Wi-Fi network. Even if your internet goes down, as long as your phone and PC are connected to the same Wi-Fi router, copying and pasting works seamlessly.",
  },
  {
    q: "Do I have to install an app on my phone?",
    a: "No app installation required on your phone! When you open ClipBoardSync on your PC, it shows a QR code. Scanning it with your iPhone or Android camera opens a fast mobile web dashboard right away.",
  },
  {
    q: "Which devices are supported?",
    a: "The main desktop app runs on Windows 10 and Windows 11. The mobile client works on any modern phone or tablet with a browser — including iPhones, iPads, Android phones, and Android tablets.",
  },
  {
    q: "Is my copied data secure?",
    a: "Yes, completely. Unlike cloud clipboard apps that store your text on external servers, ClipBoardSync transfers your clips directly between your computer and phone over your local network. No third party ever has access to your data.",
  },
  {
    q: "Is ClipBoardSync really 100% free?",
    a: "Yes! ClipBoardSync is free, ad-free, and open source under the MIT License. There are no subscriptions, paywalls, or hidden fees.",
  },
  {
    q: "What should I do if my phone can't connect?",
    a: "Make sure both your PC and phone are connected to the same Wi-Fi network. If Windows Firewall asks for permission the first time you run the app, simply click 'Allow' for Private Networks.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-colors hover:border-border-strong">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${item.q}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-text sm:text-base">
          {item.q}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-text-faint transition-transform duration-200",
            open && "rotate-180 text-primary-soft",
          )}
          aria-hidden="true"
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
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-border px-5 py-4">
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.a}
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
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28 border-b border-border bg-surface-raised/20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          body="Everything you need to know about setting up and using ClipBoardSync."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.03}>
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