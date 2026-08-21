import { Reveal } from "@/components/anim";

const TRUST_POINTS = [
  {
    highlight: "100% Local Wi-Fi",
    description: "Your data never leaves your home router. Zero cloud servers or third-party relays.",
  },
  {
    highlight: "Sub-Second Sync",
    description: "Copy on your PC and paste immediately on your phone with zero noticeable delay.",
  },
  {
    highlight: "Zero Phone Setup",
    description: "No app store downloads. Point your phone camera at the QR code and start syncing.",
  },
  {
    highlight: "Text, Images & Files",
    description: "Move text snippets, links, camera photos, and documents in both directions seamlessly.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-border bg-surface-raised/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {TRUST_POINTS.map((item, i) => (
            <Reveal key={item.highlight} delay={i * 0.04}>
              <div className="py-7 px-6 sm:px-8">
                <div className="text-sm font-bold tracking-tight text-text">
                  {item.highlight}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}