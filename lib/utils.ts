import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @param input
 * @param lang
 */
export function formatDate(
  input: string | number,
  lang: "en" | "th" = "en"
): string {
  const date = new Date(input);
  return date.toLocaleDateString(lang === "th" ? "th-TH" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * @param input
 * @param lang
 */
export function formatDateFromObj(
  input: Date,
  lang: "en" | "th" = "en"
): string {
  const date = new Date(input);
  return date.toLocaleDateString(lang === "th" ? "th-TH" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
