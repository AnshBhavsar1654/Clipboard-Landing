import { KeyRound, EyeOff, HardDrive, WifiOff } from "lucide-react";
import { Reveal } from "@/components/anim";
import { SectionHeading } from "@/components/section-heading";

const ITEMS = [
  {
    icon: WifiOff,
    title: "No cloud, no account",
    text: "Clips go straight from one device to the other over your router. There is no ClipBoardSync server to send them to, and nothing to sign up for.",
  },
  {
    icon: KeyRound,
    title: "Pairing you control",
    text: "A new phone or computer must scan your QR code or enter your pairing code. Wrong guesses are rate limited, and you can remove any paired device or switch to open mode in Settings.",
  },
  {
    icon: EyeOff,
    title: "Passwords stay put",
    text: "Items that password managers mark as private are skipped by default, so they are never sent or saved to history.",
  },
  {
    icon: HardDrive,
    title: "You own the history",
    text: "History and shared files live on your PC. Delete one clip, or clear everything, at any time. Files you remove are deleted too.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 border-y border-border bg-bg-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Privacy"
          title="Your clipboard holds your passwords, links and notes"
          body="So ClipBoardSync keeps all of it between your own devices."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full gap-5 rounded-2xl border border-border bg-surface p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success-tint text-success">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-surface px-5 py-4 text-center text-sm leading-relaxed text-text-secondary">
            <strong className="font-semibold text-text">Good to know:</strong> traffic on your Wi-Fi is not
            encrypted, so use ClipBoardSync on networks you trust, like your home or office Wi-Fi, rather than
            public hotspots.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
