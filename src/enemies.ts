import { Enemy } from "./types.ts";

const anomaly: Enemy = {
  id: "anomaly",
  name: "anomaly",
  health: 50_000_000_000,
  shield: 167, // unknown
  boss: true,
};
const anomaly2: Enemy = {
  id: "anomaly2",
  name: "anomaly?",
  health: 1_000_000_000_000,
  shield: 8_888,
  boss: true,
};

export { anomaly, anomaly2 };
