import { Reveal } from "@/components/anim";

const FEATURES = [
  {
    id: "SYNC",
    title: "TWO-WAY CLIPBOARD SYNC",
    desc: "Direct TCP socket sync for text, links, and system clipboard data. Instant bi-directional transfer. Zero manual refresh required.",
    meta: "LATENCY < 50ms",
  },
  {
    id: "CROSS-PLATFORM",
    title: "UNIVERSAL WEB CLIENT",
    desc: "No mobile app installation. The host PC serves a lightweight PWA accessible via any modern mobile browser on the local subnet.",
    meta: "iOS / ANDROID / LINUX",
  },
  {
    id: "HISTORY",
    title: "LOCAL CLIP HISTORY",
    desc: "Searchable buffer of past clipboard events. Retrieve links or snippets copied hours ago. Stored entirely on local memory.",
    meta: "CTRL+K INTERFACE",
  },
  {
    id: "FILE_TRANSFER",
    title: "BINARY FILE TRANSFER",
    desc: "Drag and drop support for images, PDFs, and arbitrary files. Transferred directly via local network streams.",
    meta: "NO FILE SIZE CAP",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-32">
        
        <Reveal className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            // CAPABILITIES
          </span>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tighter text-text sm:text-5xl uppercase">
            Everything you need.<br/>Nothing you don't.
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.id} delay={i * 0.05}>
              <div className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-border py-12 hover:bg-surface-raised transition-colors px-4 md:px-8 -mx-4 md:mx-0">
                <div className="lg:col-span-4 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint mb-3">
                    MODULE_{feature.id}
                  </span>
                  <h3 className="font-mono text-xl font-bold text-text uppercase tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-mono text-sm leading-relaxed text-text-secondary">
                    {feature.desc}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right flex lg:justify-end mt-4 lg:mt-0">
                  <span className="inline-block border border-primary text-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest bg-primary-tint">
                    {feature.meta}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}