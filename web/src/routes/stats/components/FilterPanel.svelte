<script lang="ts">
  let { filters = $bindable() } = $props();
  import humanize from "$lib/humanize";
  import { TowerRarity, TowerType, VariantTower } from "epdcalc/types";
  import { TowerMetaKey } from "epdcalc/towerMeta";
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

  const filterSections = [
    { key: "type", label: "Type", items: Object.values(TowerType).sort() },
    {
      key: "rarity",
      label: "Rarity",
      items: Object.values(TowerRarity).sort(),
    },
    {
      key: "variant",
      label: "Variant",
      items: Object.values(VariantTower).sort(),
    },
    { key: "meta", label: "Metas", items: Object.values(TowerMetaKey).sort() },
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
                        (e.target as HTMLInputElement).checked,
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
