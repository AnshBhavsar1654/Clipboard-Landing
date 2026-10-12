"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const FAQS = [
  {
    q: "Do I need internet to use it?",
    a: "No. Your devices only need to be on the same Wi-Fi or network. Sharing keeps working even if the internet is down.",
  },
  {
    q: "Do I have to install an app on my phone?",
    a: "No. Scan the QR code and ClipBoardSync opens in your phone's browser. It works on iPhone and Android, and you can reopen it any time from the same address.",
  },
  {
    q: "Can I connect two computers?",
    a: "Yes. Open Connect device, choose Another computer, pick the other PC (or type its address) and enter the pairing code it shows. After that the two PCs share clips and files both ways.",
  },
  {
    q: "Which Windows versions are supported?",
    a: "Windows 10 and 11. The window uses Microsoft Edge WebView2, which is already included with Windows 11 and most up-to-date Windows 10 PCs.",
  },
  {
    q: "Is it safe? Who can see my clips?",
    a: "Clips never go to a cloud server. Only devices you have paired can connect, and a new device needs your QR code or pairing code. Because traffic on a local network is not encrypted, use it on Wi-Fi you trust.",
  },
  {
    q: "Will it copy my passwords?",
    a: "Not by default. Clips that password managers mark as private are skipped. You can change this in Settings under Privacy.",
  },
  {
    q: "Is there a size limit for files?",
    a: "Single files can be up to 2 GB. Folders are sent as a zip of up to 1 GB. Larger transfers are skipped with a clear message instead of failing silently.",
  },
  {
    q: "My phone can't connect. What should I check?",
    a: "Make sure both are on the same Wi-Fi, then allow ClipBoardSync through Windows Firewall for private networks. In Settings, Check connection shows the address your phone should open.",
  },
  {
    q: "Is it free?",
    a: "Yes. There is no account, no subscription and no ads.",
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
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-text">{item.q}</span>
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-text-faint transition-transform duration-300",
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[15px] leading-relaxed text-text-secondary">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions people ask" />
        <Reveal delay={0.05}>
          <div className="mt-12 rounded-2xl border border-border bg-surface px-6">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex((c) => (c === i ? null : i))}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
