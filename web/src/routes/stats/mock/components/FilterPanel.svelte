<script module lang="ts">
  // Future: Move to $lib and optimize better
  export function humanize(s: string): string {
    return s
      .replace(/_/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace("Dps", "DPS")
      .replace(/\NOf/, "of")
      .replace(/^Huge/, "HUGE");
  }
</script>

<script lang="ts">
  let { filters = $bindable() } = $props();

  let openSections = $state({
    type: false,
    rarity: false,
    variant: false,
    meta: false,
  });

  let filterState = $state({
    type: new Set<string>(),
    rarity: new Set<string>(),
    variant: new Set<string>(),
    meta: new Set<string>(),
  });

  const TowerType = ["Offense", "Defense", "Generator", "Support"];
  const TowerRarity = [
    "Elusive",
    "Elusive/Standard",
    "Exalted",
    "Exotic",
    "Fabled",
    "Fusion",
    "Illustrious",
    "Legendary",
    "Lustrous",
    "Majestic",
    "Prestigious",
    "Prime",
    "Prototype",
    "Standard",
    "Synthesized",
    "Unknown",
    "???",
  ];
  const TowerVariants = [
    "zero_two",
    "shrine_of_apollo",
    "raygunner",
    "vaporizer",
    "executive",
    "scorcher",
    "stryker",
    "blizzard",
    "lucifer",
    "jar_guard",
    "lemonade_stand",
  ];
  const MetaKeys = [
    "eco",
    "shield_dps",
    "rad",
    "scorch",
    "frostbite",
    "rupture",
    "win_condition",
    "stun",
  ];

  const filterSections = [
    { key: "type", label: "Type", items: TowerType },
    { key: "rarity", label: "Rarity", items: TowerRarity },
    { key: "variant", label: "Variant", items: TowerVariants },
    { key: "meta", label: "Metas", items: MetaKeys },
  ] as const;

  function toggleSet(set: Set<string>, value: string, checked: boolean) {
    const next = new Set(set);
    checked ? next.add(value) : next.delete(value);
    return next;
  }

  $effect(() => {
    filters = {
      types: filterState.type,
      rarity: filterState.rarity,
      variant: filterState.variant,
      meta: filterState.meta,
    };
  });
</script>

<div class="h-fit rounded w-fit m-4">
  <div id="filterOptions" class="flex gap-2 h-fit flex-col">
    {#each filterSections as section}
      <div class="w-56 flex flex-col border p-2 rounded">
        <button
          class="font-bold mb-2 cursor-pointer text-left bg-transparent border-none p-0"
          onclick={() =>
            (openSections[section.key] = !openSections[section.key])}
        >
          {section.label}
          {#if filterState[section.key].size}
            ({filterState[section.key].size})
          {/if}
        </button>

        {#if openSections[section.key]}
          <ul class="overflow-y-auto max-h-64">
            {#each section.items as item}
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={filterState[section.key].has(item)}
                    onchange={(e) =>
                      (filterState[section.key] = toggleSet(
                        filterState[section.key],
                        item,
                        (e.target as HTMLInputElement).checked
                      ))}
                  />
                  {humanize(item)}
                </label>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</div>
