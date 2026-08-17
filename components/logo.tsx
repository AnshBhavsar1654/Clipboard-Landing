import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/icon.png"
        alt="ClipBoardSync logo"
        width={28}
        height={28}
        className="h-7 w-7 rounded-md"
        priority
      />
      <span className="text-[15px] font-semibold tracking-tight text-text">
        ClipBoard<span className="text-primary-soft">Sync</span>
      </span>
    </span>
  );
}
