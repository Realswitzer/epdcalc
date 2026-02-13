import type { Enemy } from "../types";

const anomaly: Enemy = {
  name: "anomaly",
  health: 50_000_000_000,
  shield: 167, // unknown
  boss: true,
};
const anomaly2: Enemy = {
  name: "anomaly?",
  displayName: "anamoly?",
  health: 1_000_000_000_000,
  shield: 8_888,
  boss: true,
};

export { anomaly, anomaly2 };
