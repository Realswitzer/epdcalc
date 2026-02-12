export default function humanize(s: string): string {
  return s
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace("Dps", "DPS")
    .replace(/\NOf/, "of")
    .replace(/^Huge/, "HUGE");
}
