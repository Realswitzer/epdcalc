import { TowerInstance } from "../../instance";

interface Formula {
  id: string;
  label: string;
  canCompute(tower: TowerInstance): boolean;
  compute(tower: TowerInstance): number | null;
}

export const Formulas: Formula[] = [
  {
    id: "bleedDps",
    label: "Bleed DPS",
    canCompute: (t) => t.getStatNumber("bleed") !== null,
    compute: (t) => t.getStatNumber("bleed")! / 5,
  },
];
