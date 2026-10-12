import {
  ArrowLeftRight,
  Command,
  FolderUp,
  Globe,
  History,
  MonitorSmartphone,
} from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: ArrowLeftRight,
    title: "Both directions, no tapping around",
    text: "Anything you copy on the PC appears on your phone, and anything you send from the phone lands on the PC's clipboard. Text, links and images paste straight in. Files arrive in your Downloads folder and can be pasted into Explorer.",
    span: "lg:col-span-2",
    accent: true,
  },
  {
    icon: Globe,
    title: "Nothing to install on the phone",
    text: "Your phone uses its browser. iPhone, Android, tablet or another computer all work.",
    span: "",
  },
  {
    icon: History,
    title: "History you can search",
    text: "Find that link from yesterday with Ctrl+K. Pin the things you reuse, delete the things you don't, or clear everything in one click.",
    span: "",
  },
  {
    icon: Command,
    title: "Quick paste from anywhere",
    text: "Press Ctrl+Shift+V in any app to open a small picker, choose a clip, and it is pasted for you. ClipBoardSync keeps running from the tray when you close the window.",
    span: "",
  },
  {
    icon: MonitorSmartphone,
    title: "Light and dark",
    text: "The app follows Windows by default, and can start with Windows if you choose that in the installer.",
    span: "",
  },
  {
    icon: FolderUp,
    title: "Photos, files and whole folders",
    text: "Drop files on the window to send them to your phone, or send from the phone with progress and cancel. Single files up to 2 GB, folders up to 1 GB, sent as a zip.",
    span: "lg:col-span-3",
    accent: true,
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-y border-border bg-bg-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Small app, everything you reach for"
          body="Built for the daily jobs: moving a link, a screenshot, a PDF or a snippet from one device to the other."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} className={f.span}>
              <div
                className={cn(
                  "h-full rounded-2xl border p-7",
                  f.accent ? "border-primary/25 bg-primary-tint/50" : "border-border bg-surface",
                )}
              >
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-xl",
                    f.accent ? "bg-primary text-primary-ink" : "bg-primary-tint text-primary",
                  )}
                >
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-text">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
