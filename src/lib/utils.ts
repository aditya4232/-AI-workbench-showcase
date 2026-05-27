/**
 * Merge class names, filtering out falsy values and flattening arrays.
 * Tailwind v4 doesn't need twMerge since it uses native CSS cascade.
 */
function flatten(input: any): string[] {
  if (!input) return [];
  if (typeof input === "string") return [input];
  if (Array.isArray(input)) return input.flatMap(flatten);
  return [];
}

export function cn(...inputs: any[]) {
  return flatten(inputs).filter(Boolean).join(" ");
}
