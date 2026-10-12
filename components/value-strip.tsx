import { Reveal } from "@/components/anim";

const POINTS = [
  { title: "Local only", text: "Your clips travel over your own Wi-Fi, never through a server." },
  { title: "No phone app", text: "Scan a QR code and your phone's browser does the rest." },
  { title: "Text, photos, files", text: "Copy once. Paste on the other side, both directions." },
  { title: "Free", text: "No account, no subscription, no ads." },
];

export function ValueStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-px px-6 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <div className="h-full py-7 lg:px-6 lg:first:pl-0">
              <h3 className="text-[15px] font-semibold text-text">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
