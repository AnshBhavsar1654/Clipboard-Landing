import { Reveal } from "@/components/anim";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}

export function SectionHeading({ eyebrow, title, body, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      <span className="text-sm font-semibold text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-text-secondary">{body}</p>
      ) : null}
    </Reveal>
  );
}
