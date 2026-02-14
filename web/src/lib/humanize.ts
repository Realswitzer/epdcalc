import type { KnownStatKeys, TowerLevel, TowerPath } from "epdcalc/types";

type StatFormatter = (value: number) => string;

function percent(v: number) {
  return formatNumber(v * 100, { suffix: "%" });
}
function seconds(v: number) {
  return formatNumber(v, { suffix: "s" });
}
function multiplier(v: number) {
  return formatNumber(v, { suffix: "x" });
}

const statFormatters: Partial<Record<KnownStatKeys, StatFormatter>> = {
  acceleration: (v) => percent(v),
  all_seeing: (v) => multiplier(v),
  armor_destruction: (v) => percent(v),
  bliz_length: (v) => seconds(v),
  boss_slayer: (v) => multiplier(v),
  bounty_add: (v) => formatNumber(v, { prefix: "$" }),
  bounty_amp: (v) => percent(v),
  burn_time: (v) => seconds(v),
  burst_cd: (v) => seconds(v),
  cash_conv: (v) => percent(v),
  cooldown_buff: (v) => percent(v),
  cooldown: (v) => seconds(v),
  corrosion: (v) => percent(v),
  crit_chance: (v) => percent(v),
  crit_dmg: (v) => percent(v),
  damage_buff: (v) => percent(v),
  damage_cap: (v) => multiplier(v),
  departure: (v) => percent(v),
  execution: (v) => percent(v),
  first_strike: (v) => multiplier(v),
  frost_time: (v) => seconds(v),
  frostbite: (v) => percent(v),
  hollow_point: (v) => multiplier(v),
  instabreak: (v) => percent(v),
  leech: (v) => percent(v),
  max_cooldown: (v) => seconds(v),
  max_dmg_increase: (v) => percent(v),
  min_cooldown: (v) => seconds(v),
  min_dmg_increase: (v) => percent(v),
  purify: (v) => multiplier(v),
  range_buff: (v) => percent(v),
  residue_length: (v) => seconds(v),
  scald: (v) => percent(v),
  scorch_length: (v) => seconds(v),
  scorch: (v) => percent(v),
  stun: (v) => seconds(v),
  upgrade_reduction: (v) => percent(v),
  valor: (v) => percent(v),
};

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

export function formatNumber(
  n: number,
  options?: { prefix?: string; suffix?: string },
): string {
  let { prefix = "", suffix = "" } = options || {};
  return prefix + n.toLocaleString("en-US") + suffix;
}

function defaultFormatter(v: number | boolean): string {
  return formatNumber(v as number);
}

export function humanizeStats(t: TowerLevel | TowerPath): {
  level: string;
  price: string;
  stats: string[];
} {
  let level = t.level.toString();
  if ("id" in t) {
    level += t.id;
  }
  let price = formatNumber(t.price, { prefix: "$" });
  let stats: string[] = [];
  for (let [key, value] of Object.entries(t.stats)) {
    if (typeof value === "boolean") {
      if (!value) continue;

      stats.push(key === "camo" ? "Camo Vision" : humanize(key));

      continue;
    }

    const formatter = statFormatters[key as KnownStatKeys] ?? defaultFormatter;

    const formattedValue = formatter(value as number);

    if (!formattedValue) continue;

    stats.push(`${humanize(key)}: ${formattedValue}`);
  }

  return { level, price, stats };
}
