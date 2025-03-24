import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a string into a string of Unicode code points in the format `\uXXXX`.
 * Each character in the input string is transformed into its corresponding Unicode
 * code point (in hexadecimal), padded to at least 4 digits, and prefixed with `\u`.
 * The resulting code points are joined into a single string with commas.
 *
 * @param str - The input string to convert into Unicode code points.
 * @returns A string of comma-separated Unicode code points (e.g., `\u0041,\u0042` for "AB").
 */
export const getCodePoints = (str: string) => {
  return Array.from(str)
    .map((char) => char.codePointAt(0)?.toString(16).padStart(4, '0'))
    .map((hex) => `\\u${hex}`)
    .join()
}
