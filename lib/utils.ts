import { db } from "@/database/db"
import { blog } from "@/database/schema"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate a URL-safe, SEO-friendly slug
 *
 * @example
 * generateSlug("Next.js & React Basics") // "next-js-react-basics"
 */
export function generateSlug(input: string): string {

  return input
    .toString()
    .normalize("NFKD")                     // handle accented chars
    .replace(/[\u0300-\u036f]/g, "")       // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")          // remove special chars
    .replace(/\s+/g, "-")                  // spaces → hyphen
    .replace(/-+/g, "-");                  // collapse multiple hyphens
}
