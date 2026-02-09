export function formatNumber(num: number): string {
  const thresholds = [
    { value: 1e15, suffix: "Qd" },
    { value: 1e12, suffix: "T" },
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ];

  for (const { value, suffix } of thresholds) {
    if (num >= value) {
      return (num / value).toFixed(2) + suffix;
    }
  }

  return num.toString();
}
