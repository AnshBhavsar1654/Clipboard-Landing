import { Reveal } from "@/components/anim";

const STEPS = [
  {
    num: "01",
    title: "INIT_WINDOWS_CLIENT",
    desc: "Download ClipBoardSync for Windows. Execute the binary. No installation, no background telemetry, no account creation.",
  },
  {
    num: "02",
    title: "ESTABLISH_HANDSHAKE",
    desc: "Point your mobile device camera at the generated QR code. The mobile client loads instantly via local network IP.",
  },
  {
    num: "03",
    title: "BI_DIRECTIONAL_SYNC",
    desc: "System clipboards are now linked via local TCP socket. Standard OS copy/paste commands instantly mirror across devices.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-32 border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            // PROTOCOL_FLOW
          </span>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tighter text-text sm:text-5xl uppercase">
            Execution in under a minute
          </h2>
          <p className="mt-4 font-mono text-sm leading-relaxed text-text-secondary">
            {">"} Zero dependency installation. Zero cloud routing.
          </p>
        </Reveal>

        <div className="border-t border-border">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-border py-8 md:py-12 hover:bg-surface-raised transition-colors px-4 md:px-8 -mx-4 md:mx-0">
                <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2">
                  <span className="font-mono text-3xl md:text-5xl font-black text-border-strong group-hover:text-primary transition-colors">
                    {step.num}
                  </span>
                  <h3 className="font-mono text-lg md:text-xl font-bold text-text uppercase tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-4 md:mt-0 w-full md:w-1/2 md:pl-12">
                  <p className="font-mono text-sm leading-relaxed text-text-secondary">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}