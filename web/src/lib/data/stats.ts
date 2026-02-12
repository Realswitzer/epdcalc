export interface stats {
  name: string;
  stats: string[];
  formula: string;
  description: string;
}
export const Support = {
  Rad: {
    name: "Rad",
    stats: ["Rad. Strength", "Rad. Length"],
    formula: "Damage = (1+radStrength)",
    description:
      "Rad is a multiplicative damage multiplier, applied by Stryker and Apollo variants. On Apollo variants, each beam attack will apply Rad to any enemies in its Radius.",
  },
} as const satisfies Record<string, stats>;
export const Stats = { Support };
