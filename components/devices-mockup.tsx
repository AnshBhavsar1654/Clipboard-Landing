"use client";

import { useReducedMotion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  FileText,
  Files,
  Image as ImageIcon,
  Link2,
  Lock,
  Monitor,
  Pin,
  Search,
  Settings,
  Signal,
  Wifi,
  Activity,
  Minus,
  Square,
  X,
  Check,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { QrMark } from "@/components/qr-mark";

const SIDEBAR_NAV = [
  { id: "clipboard", label: "Clipboard", icon: ClipboardList },
  { id: "pinned", label: "Pinned", icon: Pin },
  { id: "files", label: "Files", icon: Files },
  { id: "devices", label: "Devices", icon: Monitor },
];

interface ClipItemProps {
  icon: React.ReactNode;
  title: string;
  meta: string;
  active?: boolean;
  pinned?: boolean;
  typeBadge: string;
}

function ClipItem({ icon, title, meta, active, pinned, typeBadge }: ClipItemProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-200",
        active
          ? "border-primary/50 bg-primary-tint text-text"
          : "border-border bg-surface hover:border-border-strong hover:bg-surface-raised",
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-xs",
          active
            ? "border-primary/40 bg-primary/10 text-primary-soft"
            : "border-border bg-surface-raised text-text-faint",
        )}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-xs font-medium text-text">{title}</span>
          <span className="shrink-0 rounded border border-border px-1 py-0.2 text-[9px] font-medium text-text-faint">
            {typeBadge}
          </span>
        </div>
        <span className="block text-[11px] text-text-faint">{meta}</span>
      </div>
      {pinned && (
        <span className="inline-flex items-center text-primary-soft">
          <Pin className="h-3 w-3" aria-hidden="true" />
        </span>
      )}
    </div>
  );
}

export function DevicesMockup() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<0 | 1>(0);
  const [activeTab, setActiveTab] = useState<"clipboard" | "pinned" | "files" | "devices">("clipboard");

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setPhase((prev) => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [reduced]);

  const phoneToPc = phase === 0;
  const pcToPhone = phase === 1;

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Device mockups side-by-side */}
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* Windows Desktop App Mockup */}
        <div className="relative w-full max-w-[500px] shrink-0 overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
          {/* Windows 11 Native Title Bar */}
          <div className="flex h-9 items-center justify-between border-b border-border bg-surface-raised px-3.5 select-none">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-xs font-medium text-text-secondary">
                ClipBoardSync
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-1 text-[11px] text-text-faint sm:inline-flex">
                <Wifi className="h-3 w-3 text-success" /> Connected · 2 devices
              </span>
              {/* Windows Window Controls */}
              <div className="flex items-center text-text-faint">
                <div className="flex h-7 w-7 items-center justify-center hover:bg-surface-overlay hover:text-text transition-colors">
                  <Minus className="h-3 w-3" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center hover:bg-surface-overlay hover:text-text transition-colors">
                  <Square className="h-2.5 w-2.5" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-colors">
                  <X className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar Rail */}
            <div className="hidden w-36 shrink-0 border-r border-border bg-surface-raised/40 p-2 sm:block">
              {SIDEBAR_NAV.map((item) => {
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id as typeof activeTab)}
                    className={cn(
                      "mb-1 flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-xs font-medium transition-colors cursor-pointer",
                      isSelected
                        ? "bg-surface-raised font-semibold text-text shadow-xs"
                        : "text-text-faint hover:bg-surface-raised/60 hover:text-text-secondary",
                    )}
                  >
                    <item.icon
                      className={cn("h-3.5 w-3.5", isSelected ? "text-primary-soft" : "text-text-faint")}
                      aria-hidden="true"
                    />
                    {item.label}
                  </button>
                );
              })}

              <div className="mt-8 border-t border-border pt-2">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-text-faint font-semibold">
                  STATUS
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-success font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Ready to sync
                </div>
              </div>
            </div>

            {/* Main Window Content */}
            <div className="min-w-0 flex-1 p-3">
              {/* Search bar */}
              <div className="mb-2.5 flex items-center gap-2 rounded-md border border-border bg-surface-raised px-2.5 py-1.5">
                <Search className="h-3.5 w-3.5 text-text-faint" aria-hidden="true" />
                <span className="text-xs text-text-faint">Search clipboard history…</span>
                <kbd className="ml-auto rounded border border-border bg-surface px-1.5 py-0.5 text-[9px] font-medium text-text-faint">
                  Ctrl+K
                </kbd>
              </div>

              {/* Items List */}
              {activeTab === "devices" ? (
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between rounded-lg border border-border bg-surface-raised p-2.5">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="h-4 w-4 text-primary-soft" />
                      <div>
                        <div className="text-xs font-semibold text-text">My Phone (Mobile Browser)</div>
                        <div className="text-[11px] text-text-faint">Connected on home Wi-Fi</div>
                      </div>
                    </div>
                    <span className="rounded bg-success-tint px-2 py-0.5 text-[10px] font-semibold text-success">
                      ONLINE
                    </span>
                  </div>
                  <div className="rounded-lg border border-dashed border-border p-3 text-center text-xs text-text-faint">
                    Point your camera at the QR code on your phone to connect another device.
                  </div>
                </div>
              ) : activeTab === "pinned" ? (
                <div className="space-y-1.5">
                  <ClipItem
                    icon={<FileText className="h-3.5 w-3.5" />}
                    title="Wi-Fi Password: my-home-network-2026"
                    meta="Pinned on PC"
                    typeBadge="TEXT"
                    pinned
                  />
                  <ClipItem
                    icon={<Link2 className="h-3.5 w-3.5" />}
                    title="https://recipes.com/healthy-dinner"
                    meta="Pinned from Phone"
                    typeBadge="LINK"
                    pinned
                  />
                </div>
              ) : activeTab === "files" ? (
                <div className="space-y-1.5">
                  <ClipItem
                    icon={<ImageIcon className="h-3.5 w-3.5" />}
                    title="vacation_photo.jpg"
                    meta="Synced from Phone · 2.4 MB"
                    typeBadge="IMAGE"
                  />
                  <ClipItem
                    icon={<FileText className="h-3.5 w-3.5" />}
                    title="contract_draft.pdf"
                    meta="PC · 1.1 MB"
                    typeBadge="PDF"
                  />
                </div>
              ) : (
                <div className="space-y-1.5">
                  <ClipItem
                    icon={<Link2 className="h-3.5 w-3.5" />}
                    title="https://github.com/ClipBoardSync"
                    meta="Copied on Phone · 2s ago"
                    typeBadge="LINK"
                    active={phoneToPc}
                  />
                  <ClipItem
                    icon={<FileText className="h-3.5 w-3.5" />}
                    title="Meeting notes: ship the new design today"
                    meta="PC · 1m ago"
                    typeBadge="TEXT"
                    pinned
                  />
                  <ClipItem
                    icon={<ImageIcon className="h-3.5 w-3.5" />}
                    title="screenshot-2026.png"
                    meta="PC · 8m ago"
                    typeBadge="IMAGE"
                  />
                  <ClipItem
                    icon={<FileText className="h-3.5 w-3.5" />}
                    title="Grocery list: milk, coffee, sourdough bread"
                    meta="Copied on Phone · 14m ago"
                    typeBadge="TEXT"
                  />
                </div>
              )}

              {/* Window Footer */}
              <div className="mt-3 flex items-center justify-between border-t border-border pt-2 text-[11px] text-text-faint">
                <span>4 items saved</span>
                <span className="flex items-center gap-1 text-[11px] text-text-secondary">
                  <Activity className="h-3 w-3 text-primary-soft" /> Real-time sync ready
                </span>
              </div>
            </div>
          </div>

          {/* Sync notification banner */}
          <AnimatePresence>
            {phoneToPc && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-3 top-12 z-10 flex items-center gap-2 rounded-md border border-border-strong bg-surface-raised px-2.5 py-1.5 text-xs text-text shadow-lg"
              >
                <Check className="h-3.5 w-3.5 text-success" />
                <span>Pasted from your phone!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Web Client Frame */}
        <div className="relative w-[220px] shrink-0 rounded-2xl border border-border bg-surface p-2 shadow-xl">
          <div className="overflow-hidden rounded-xl border border-border bg-surface-raised">
            {/* Phone status bar */}
            <div className="flex items-center justify-between px-3 pt-2 text-[10px] text-text-faint font-medium">
              <span>09:41</span>
              <div className="flex items-center gap-1">
                <Signal className="h-2.5 w-2.5" />
                <Wifi className="h-2.5 w-2.5 text-success" />
              </div>
            </div>

            {/* Mobile Browser Address Bar */}
            <div className="mx-2 mt-1.5 flex items-center gap-1.5 rounded border border-border bg-surface px-2 py-1">
              <Lock className="h-2.5 w-2.5 text-success" />
              <span className="truncate text-[9px] text-text-secondary">
                ClipBoardSync Mobile
              </span>
            </div>

            {/* Phone Clipboard content */}
            <div className="p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-text">Mobile Clipboard</span>
                <span className="flex items-center gap-1 text-[9px] text-success font-medium">
                  <span className="h-1 w-1 rounded-full bg-success" /> Connected
                </span>
              </div>

              <div className="space-y-1.5">
                <div
                  className={cn(
                    "rounded-md border p-1.5 transition-colors",
                    pcToPhone
                      ? "border-primary/50 bg-primary-tint"
                      : "border-border bg-surface",
                  )}
                >
                  <div className="truncate text-[10px] font-medium text-text">
                    Meeting notes: ship the new design...
                  </div>
                  <div className="text-[8px] text-text-faint">
                    {pcToPhone ? "Just synced from PC" : "From PC · 1m ago"}
                  </div>
                </div>

                <div className="rounded-md border border-border bg-surface p-1.5">
                  <div className="truncate text-[10px] font-medium text-text">
                    https://github.com/ClipBoardSync
                  </div>
                  <div className="text-[8px] text-text-faint">Copied on phone</div>
                </div>
              </div>

              {/* QR Pairing Box */}
              <div className="mt-2.5 flex items-center gap-2 rounded-md border border-border bg-surface p-1.5">
                <QrMark className="h-8 w-8 shrink-0 rounded-xs" />
                <div className="min-w-0">
                  <div className="text-[9px] font-semibold text-text">Pair Any Device</div>
                  <div className="text-[8px] text-text-faint">Just scan with your camera</div>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="mx-auto mb-1.5 mt-1 h-1 w-12 rounded-full bg-border" />
          </div>

          <AnimatePresence>
            {pcToPhone && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-12 bottom-16 z-10 flex items-center gap-1.5 rounded-md border border-border-strong bg-surface-raised px-2 py-1 text-[11px] text-text shadow-lg"
              >
                <Check className="h-3 w-3 text-success" />
                <span>Synced to phone</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Trust info strip */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs text-text-faint">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Synced over your home Wi-Fi
        </span>
        <span aria-hidden="true">·</span>
        <span>Never stored on external servers</span>
        <span aria-hidden="true">·</span>
        <span>Instant real-time transfer</span>
      </div>
    </div>
  );
}
