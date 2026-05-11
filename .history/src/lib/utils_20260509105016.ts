import type { ClassValue } from "clsx";

export function cn(...classes: Array<ClassValue | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}