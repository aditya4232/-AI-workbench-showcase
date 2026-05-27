/**
 * Merge class names, filtering out falsy values and flattening arrays.
 * Tailwind v4 doesn't need twMerge since it uses native CSS cascade.
 */

type ClassValue = string | false | null | undefined | ClassValue[];

function flatten(input: ClassValue): string[] {
  if (!input) return [];
  if (typeof input === "string") return [input];
  if (Array.isArray(input)) return input.flatMap(flatten);
  return [];
}

export function cn(...inputs: ClassValue[]) {
  return flatten(inputs).filter(Boolean).join(" ");
}
