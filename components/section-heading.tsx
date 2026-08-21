import { Reveal } from "@/components/anim";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-soft">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-3 text-pretty text-xs sm:text-sm leading-relaxed text-text-secondary">
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}