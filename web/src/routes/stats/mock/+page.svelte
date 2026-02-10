<script lang="ts">
  let showFilterOptions = $state(false);

  let filteredTypes = $state(new Set<string>());
  let filteredRarities = $state(new Set<string>());

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

  function toggleType(type: string, checked: boolean) {
    const next = new Set(filteredTypes);
    if (checked) next.add(type);
    else next.delete(type);
    filteredTypes = next;
  }
  function toggleRarity(rarity: string, checked: boolean) {
    const next = new Set(filteredRarities);
    if (checked) next.add(rarity);
    else next.delete(rarity);
    filteredRarities = next;
  }

  function toggleFilterOptions() {
    showFilterOptions = !showFilterOptions;
  }

  $effect(() => {
    console.log("filteredTypes:", [...filteredTypes]);
  });
</script>

<div class="h-fit border rounded w-fit">
  <input type="checkbox" bind:checked={showFilterOptions} />

  <div
    id="filterOptions"
    class="flex gap-4 h-64 p-4"
    class:inactive={!showFilterOptions}
  >
    <div class="w-48 flex flex-col border p-2 rounded">
      <span class="font-bold mb-2">Type</span>
      <ul class="overflow-y-auto max-h-64">
        {#each TowerType as type}
          <li>
            <label>
              <input
                type="checkbox"
                checked={filteredTypes.has(type)}
                onchange={(e) =>
                  toggleType(type, (e.target as HTMLInputElement).checked)}
              />
              {type}
            </label>
          </li>
        {/each}
      </ul>
    </div>

    <div class="w-48 flex flex-col border p-2 rounded">
      <span class="font-bold mb-2">Rarity</span>
      <ul class="overflow-y-auto max-h-64">
        {#each TowerRarity as rarity}
          <li>
            <label>
              <input
                type="checkbox"
                checked={filteredRarities.has(rarity)}
                onchange={(e) =>
                  toggleRarity(rarity, (e.target as HTMLInputElement).checked)}
              />
              {rarity}
            </label>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .inactive {
    display: none;
  }
</style>
