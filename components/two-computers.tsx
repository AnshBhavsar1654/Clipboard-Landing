import { Check, Laptop, Monitor } from "lucide-react";
import { Reveal } from "@/components/anim";

const POINTS = [
  "Both computers run ClipBoardSync. Nothing else to set up.",
  "Open Connect device, choose Another computer, and pick the other PC from the nearby list.",
  "Enter the pairing code shown on the other PC. You only do this once.",
  "Text, images and files then flow both ways, and each PC's phones see everything too.",
];

export function TwoComputers() {
  return (
    <section id="two-computers" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold text-primary">Two computers</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Home PC and work laptop? Link them.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            ClipBoardSync is not just for phones. Two Windows computers on the same network can share a
            clipboard too, so you can copy on one and paste on the other without emailing yourself.
          </p>
          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-text-secondary">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success-tint text-success">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          {/* The connect dialog, Another computer tab */}
          <div className="shadow-card rounded-2xl border border-border bg-surface p-6">
            <p className="text-base font-semibold text-text">Connect a device</p>
            <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-surface-raised p-1 text-sm font-semibold">
              <span className="rounded-lg py-1.5 text-center text-text-secondary">Phone</span>
              <span className="rounded-lg bg-surface py-1.5 text-center text-text ring-1 ring-border">
                Another computer
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-text-faint">Nearby computers</p>
            <div className="mt-2 flex items-center justify-between rounded-xl border border-primary bg-primary-tint/50 px-3.5 py-3">
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface text-primary">
                  <Laptop className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text">WORK-LAPTOP</span>
                  <span className="block text-xs text-text-faint">192.168.1.24:8000</span>
                </span>
              </span>
              <Monitor className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>

            <div className="mt-4 grid grid-cols-[1fr_88px] gap-3">
              <div>
                <p className="text-xs text-text-secondary">Address</p>
                <p className="mt-1 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm text-text">192.168.1.24</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary">Code</p>
                <p className="mt-1 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm tracking-widest text-text">
                  ••••••
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-success">
                <span className="h-2 w-2 rounded-full bg-success ring-4 ring-success-tint" />
                Connected. Clips sync both ways.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
