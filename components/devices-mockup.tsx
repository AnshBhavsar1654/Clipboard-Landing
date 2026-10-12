"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Copy,
  File as FileIcon,
  Files,
  Image as ImageIcon,
  LayoutList,
  Link2,
  Minus,
  Pin,
  Search,
  Settings,
  Square,
  Type,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "All", icon: LayoutList, count: "5", active: true },
  { label: "Text & links", icon: Type, count: "3" },
  { label: "Images", icon: ImageIcon, count: "1" },
  { label: "Files", icon: Files, count: "1" },
  { label: "Pinned", icon: Pin },
];

type Kind = "link" | "text" | "image" | "file";

function Tile({ kind }: { kind: Kind }) {
  const base = "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg";
  if (kind === "image")
    return (
      <span className={cn(base, "bg-gradient-to-br from-primary to-primary-tint")}>
        <span className="h-3.5 w-3.5 rounded-full bg-warn" />
      </span>
    );
  if (kind === "link")
    return (
      <span className={cn(base, "bg-primary-tint text-primary")}>
        <Link2 className="h-4 w-4" aria-hidden="true" />
      </span>
    );
  if (kind === "file")
    return (
      <span className={cn(base, "bg-warn-tint text-warn")}>
        <FileIcon className="h-4 w-4" aria-hidden="true" />
      </span>
    );
  return (
    <span className={cn(base, "bg-surface-raised text-text-secondary")}>
      <Type className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

function Clip({
  kind,
  title,
  meta,
  selected,
  pinned,
}: {
  kind: Kind;
  title: React.ReactNode;
  meta: string;
  selected?: boolean;
  pinned?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border bg-surface px-3 py-2.5 transition-all duration-300",
        selected ? "border-primary ring-4 ring-primary-tint" : "border-border",
      )}
    >
      <Tile kind={kind} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-text">{title}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-text-faint">
          {pinned && <Pin className="h-3 w-3 text-primary" aria-hidden="true" />}
          {meta}
        </p>
      </div>
      {selected && (
        <span className="hidden items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-[11px] font-semibold text-primary-ink sm:inline-flex">
          <Copy className="h-3 w-3" aria-hidden="true" /> Copy
        </span>
      )}
    </div>
  );
}

export function DevicesMockup() {
  const reduced = useReducedMotion();
  const [fromPhone, setFromPhone] = useState(true);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setFromPhone((v) => !v), 3600);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-10 pr-6 sm:pr-14">
      {/* Windows app window */}
      <div className="shadow-card relative overflow-hidden rounded-2xl border border-border bg-bg">
        <div className="flex h-9 items-center justify-between border-b border-border bg-surface pl-3.5 text-text-faint select-none">
          <span className="text-xs font-medium text-text-secondary">ClipBoardSync</span>
          <div className="flex items-center">
            <span className="flex h-9 w-10 items-center justify-center"><Minus className="h-3 w-3" /></span>
            <span className="flex h-9 w-10 items-center justify-center"><Square className="h-2.5 w-2.5" /></span>
            <span className="flex h-9 w-10 items-center justify-center"><X className="h-3.5 w-3.5" /></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[148px_1fr]">
          <aside className="hidden flex-col gap-3 border-r border-border bg-bg-subtle p-2.5 sm:flex">
            <nav className="flex flex-col gap-0.5">
              {NAV.map((n) => (
                <span
                  key={n.label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium",
                    n.active ? "bg-surface text-text ring-1 ring-border" : "text-text-secondary",
                  )}
                >
                  <n.icon className={cn("h-3.5 w-3.5", n.active && "text-primary")} aria-hidden="true" />
                  {n.label}
                  {n.count && <span className="ml-auto text-[10px] text-text-faint">{n.count}</span>}
                </span>
              ))}
            </nav>
            <div className="mt-8 rounded-xl border border-border bg-surface p-2.5">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-text">
                <span className="h-2 w-2 rounded-full bg-success ring-4 ring-success-tint" />
                Sharing on
              </p>
              <p className="mt-1 text-[10.5px] leading-snug text-text-secondary">Your phone is connected.</p>
              <span className="mt-2 flex h-7 items-center justify-center rounded-lg bg-primary text-[11px] font-semibold text-primary-ink">
                Connect device
              </span>
            </div>
            <span className="flex items-center gap-2 px-2 text-xs font-medium text-text-secondary">
              <Settings className="h-3.5 w-3.5" aria-hidden="true" /> Settings
            </span>
          </aside>

          <div className="min-w-0 p-3">
            <div className="mb-3 flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-xs text-text-faint">
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              Search your clips
              <kbd className="ml-auto rounded-md border border-border bg-surface-raised px-1.5 py-0.5 text-[10px]">Ctrl K</kbd>
            </div>
            <p className="px-1 pb-1.5 text-[11px] font-semibold text-text-faint">Today</p>
            <div className="flex flex-col gap-2">
              <Clip
                kind="link"
                title={
                  <>
                    <b className="font-semibold">github.com</b>
                    <span className="text-text-secondary">/ClipBoardSync</span>
                  </>
                }
                meta="Link · Phone · just now"
                selected={fromPhone}
              />
              <Clip kind="text" title="Meeting notes: ship the new design today" meta="Text · This computer · 1 min ago" pinned />
              <Clip kind="image" title="vacation_photo.jpg" meta="Image · Phone · 8 min ago · 2.4 MB" />
              <Clip kind="file" title="Quarterly report.pdf" meta="File · Phone · 14 min ago · 332 KB" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {fromPhone && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 sm:left-[58%]"
            >
              <span className="shadow-card inline-flex items-center gap-2 rounded-xl bg-text px-3.5 py-2 text-xs font-medium text-bg">
                <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Received from your phone
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phone */}
      <div className="shadow-card absolute bottom-0 right-0 w-[150px] rounded-[26px] border border-border-strong bg-surface p-1.5 sm:w-[170px]">
        <div className="overflow-hidden rounded-[20px] border border-border bg-bg">
          <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-border-strong" />
          <div className="p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-text">ClipBoardSync</span>
              <span className="flex items-center gap-1 text-[9px] font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Connected
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              <div
                className={cn(
                  "rounded-lg border p-2 transition-all duration-300",
                  !fromPhone ? "border-primary bg-primary-tint" : "border-border bg-surface",
                )}
              >
                <p className="truncate text-[10px] font-medium text-text">Meeting notes: ship the new…</p>
                <p className="text-[8.5px] text-text-faint">{!fromPhone ? "Just now from your PC" : "From your PC"}</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2">
                <p className="truncate text-[10px] font-medium text-text">github.com/ClipBoardSync</p>
                <p className="text-[8.5px] text-text-faint">Sent from this phone</p>
              </div>
            </div>
            <div className="mt-2 grid h-7 place-items-center rounded-lg bg-primary text-[10px] font-semibold text-primary-ink">
              Send a file
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
