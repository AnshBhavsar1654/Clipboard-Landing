import { Reveal } from "@/components/anim";

const TRUST_POINTS = [
  {
    highlight: "100%_LOCAL_WIFI",
    description: "NO CLOUD ROUTING",
  },
  {
    highlight: "SUB_SECOND_SYNC",
    description: "ZERO DELAY",
  },
  {
    highlight: "ZERO_PHONE_SETUP",
    description: "NO APP REQUIRED",
  },
  {
    highlight: "TEXT_IMG_FILES",
    description: "BI-DIRECTIONAL",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-border bg-surface font-mono uppercase">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 border-x border-border sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((item, i) => (
            <Reveal key={item.highlight} delay={i * 0.04}>
              <div className="flex flex-col justify-center h-20 px-6 sm:px-8 border-b sm:border-b-0 border-border lg:border-r lg:last:border-r-0 sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-child(odd)]:border-r group hover:bg-surface-raised transition-colors">
                <div className="text-[11px] font-bold tracking-widest text-primary mb-1">
                  {item.highlight}
                </div>
                <div className="text-[10px] tracking-wider text-text-secondary">
                  {item.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}