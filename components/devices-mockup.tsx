"use client";

import { useReducedMotion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  FileText,
  Files,
  ImageIcon,
  Link2,
  Lock,
  Monitor,
  Pin,
  Search,
  Settings,
  Signal,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { QrMark } from "@/components/qr-mark";

const SIDEBAR = [
  { label: "Clipboard", icon: ClipboardList, active: true },
  { label: "Pinned", icon: Pin },
  { label: "Files", icon: Files },
  { label: "Devices", icon: Monitor },
  { label: "Settings", icon: Settings },
];

interface ClipItemProps {
  icon: React.ReactNode;
  title: string;
  meta: string;
  active: boolean;
  pinned?: boolean;
  thumbnail?: string;
}

function ClipItem({ icon, title, meta, active, pinned, thumbnail }: ClipItemProps) {
  return (
    <motion.div
      animate={
        active
          ? { backgroundColor: "rgba(99,102,241,0.14)" }
          : { backgroundColor: "rgba(21,24,29,0)" }
      }
      transition={{ duration: 0.35 }}
      className={cn(
        "relative flex items-center gap-2.5 rounded-lg border px-2.5 py-2",
        active ? "border-primary/40" : "border-border",
      )}
    >
      {active && (
        <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/30" />
      )}
      {thumbnail ? (
        <span
          className="h-8 w-8 shrink-0 rounded-md border border-border bg-cover"
          style={{ backgroundImage: thumbnail }}
        />
      ) : (
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border",
            active ? "border-primary/40 text-primary-soft" : "border-border text-text-faint",
          )}
        >
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[12px] font-medium text-text">{title}</span>
        <span className="block text-[10px] text-text-faint">{meta}</span>
      </span>
      {pinned && <Pin className="h-3 w-3 shrink-0 text-primary-soft" aria-hidden />}
    </motion.div>
  );
}

export function DevicesMockup() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setPhase((p) => (p === 0 ? 1 : 0)), 3200);
    return () => clearInterval(id);
  }, [reduced]);

  const phoneToPc = phase === 0;
  const pcToPhone = phase === 1;

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="flex items-center justify-center gap-5 md:gap-24">
        <DesktopWindow phoneToPc={phoneToPc} />
        <PhoneFrame pcToPhone={pcToPhone} />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
        <div className="relative flex w-28 items-center">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-border" />
          <span
            className={cn(
              "absolute h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(99,102,241,0.9)] transition-all duration-700 ease-out",
              phoneToPc ? "left-0" : "left-[calc(100%-0.625rem)]",
            )}
          />
          <span
            className={cn(
              "absolute h-2.5 w-2.5 rounded-full bg-primary-soft shadow-[0_0_12px_rgba(129,140,248,0.9)] transition-all delay-300 duration-700 ease-out",
              phoneToPc ? "left-0" : "left-[calc(100%-0.625rem)]",
            )}
          />
        </div>
        <span className="absolute top-1/2 -translate-y-[calc(50%+1.25rem)] text-[11px] font-medium text-text-faint">
          <Wifi className="mr-1 inline h-3.5 w-3.5 text-primary-soft" aria-hidden />
          Your Wi-Fi
        </span>
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-text-secondary">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        Copy on either device — it appears on the other in under a second.
      </p>
    </div>
  );
}

function DesktopWindow({ phoneToPc }: { phoneToPc: boolean }) {
  return (
    <div className="relative w-full max-w-[460px] shrink-0 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="mx-auto text-xs font-medium text-text-faint">
          ClipBoardSync
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          2 devices
        </span>
      </div>

      <div className="flex">
        <div className="hidden w-32 shrink-0 border-r border-border p-1.5 sm:block">
          {SIDEBAR.map((item) => (
            <div
              key={item.label}
              className={cn(
                "mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium",
                item.active
                  ? "bg-primary-tint text-text"
                  : "text-text-faint",
              )}
            >
              <item.icon
                className={cn("h-3.5 w-3.5", item.active && "text-primary-soft")}
                aria-hidden
              />
              {item.label}
            </div>
          ))}
        </div>

        <div className="min-w-0 flex-1 p-2.5">
          <div className="mb-2 flex items-center gap-2 rounded-lg border border-border bg-surface-raised px-2.5 py-1.5">
            <Search className="h-3.5 w-3.5 text-text-faint" aria-hidden />
            <span className="text-[11px] text-text-faint">Search clipboard…</span>
            <kbd className="ml-auto rounded border border-border bg-surface px-1.5 py-0.5 text-[9px] font-medium text-text-faint">
              Ctrl K
            </kbd>
          </div>

          <div className="space-y-1.5">
            <ClipItem
              icon={<Link2 className="h-4 w-4" />}
              title="https://github.com/clipboardsync"
              meta="Synced from phone · 2s ago"
              active={phoneToPc}
            />
            <ClipItem
              icon={<FileText className="h-4 w-4" />}
              title="Deploy checklist — run build, tag v0.1"
              meta="This PC · 9m ago"
              pinned
              active={false}
            />
            <ClipItem
              icon={<ImageIcon className="h-4 w-4" />}
              title="screenshot-2026.png"
              meta="This PC · 24m ago"
              thumbnail="linear-gradient(135deg,#6366f1,#a78bfa 60%,#34d399)"
              active={false}
            />
            <ClipItem
              icon={<FileText className="h-4 w-4" />}
              title="design-mockup.pdf · 2.4 MB"
              meta="Synced from phone · 1h ago"
              active={false}
            />
          </div>

          <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2 text-[10px] text-text-faint">
            <span>128 items</span>
            <span className="inline-flex items-center gap-1 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live sync
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {phoneToPc && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute -right-2 top-12 rounded-lg border border-primary/40 bg-surface-raised px-3 py-2 text-xs font-medium text-text shadow-lg shadow-black/40"
          >
            <span className="mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            Synced from phone
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PhoneFrame({ pcToPhone }: { pcToPhone: boolean }) {
  return (
    <div className="relative w-[190px] shrink-0 rounded-[2.2rem] border border-border bg-surface p-2 shadow-2xl shadow-black/50 sm:w-[210px]">
      <div className="overflow-hidden rounded-[1.7rem] border border-border bg-surface-raised">
        <div className="flex items-center justify-between px-4 pb-1 pt-3 text-[10px] font-medium text-text-faint">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <Signal className="h-2.5 w-2.5" aria-hidden />
            <Wifi className="h-2.5 w-2.5" aria-hidden />
          </span>
        </div>

        <div className="mx-2.5 flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1.5">
          <Lock className="h-2.5 w-2.5 text-success" aria-hidden />
          <span className="truncate text-[9px] text-text-secondary">
            192.168.1.42:8000
          </span>
        </div>

        <div className="p-2.5">
          <p className="mb-1.5 text-[11px] font-semibold text-text">
            Clipboard
          </p>
          <div className="space-y-1.5">
            <ClipItem
              icon={<Link2 className="h-4 w-4" />}
              title="https://github.com/clipboardsync"
              meta="2s ago"
              active={false}
            />
            <ClipItem
              icon={<FileText className="h-4 w-4" />}
              title="Deploy checklist"
              meta="From PC · 1s ago"
              active={pcToPhone}
            />
            <ClipItem
              icon={<ImageIcon className="h-4 w-4" />}
              title="screenshot-2026.png"
              meta="1h ago"
              active={false}
            />
          </div>

          <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-border bg-surface p-2">
            <QrMark className="h-9 w-9 rounded-sm" />
            <div className="min-w-0">
              <p className="text-[9px] font-medium text-text">Pair a device</p>
              <p className="text-[8px] text-text-faint">
                Scan with your phone camera
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-1.5 mt-1 h-1 w-16 rounded-full bg-border" />
      </div>

      <AnimatePresence>
        {pcToPhone && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute -left-16 top-16 z-10 rounded-lg border border-primary/40 bg-surface-raised px-3 py-2 text-xs font-medium text-text shadow-lg shadow-black/40"
          >
            <span className="mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            Synced from PC
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
