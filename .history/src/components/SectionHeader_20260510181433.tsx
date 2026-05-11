import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        isCentered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
        {eyebrow}
      </p>

      <Heading
        className={cn(
          "mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl",
          isCentered ? "mx-auto" : "",
        )}
      >
        {title}
      </Heading>

      <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}