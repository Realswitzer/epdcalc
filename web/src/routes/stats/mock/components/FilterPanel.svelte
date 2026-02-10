<script lang="ts">
  let { filters = $bindable() } = $props();

  let openSections = $state({
    type: false,
    rarity: false,
  });

  let filteredTypes = $state(new Set<string>());
  let filteredRarities = $state(new Set<string>());
  // let filteredVariants = $state(new Set<string>()); -- later.

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
</script>

<div class="h-fit rounded w-fit m-4">
  <div id="filterOptions" class="flex gap-2 h-fit flex-col">
    <div class="w-full flex flex-col border p-2 rounded">
      <button
        class="font-bold mb-2 cursor-pointer text-left bg-transparent border-none p-0"
        onclick={(e) => {
          openSections.type = !openSections.type;
        }}
        >Type {#if [...filteredTypes].length}
          ({[...filteredTypes].length}){/if}</button
      >
      {#if openSections.type}
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
      {/if}
    </div>

    <div class="w-56 flex flex-col border p-2 rounded">
      <button
        class="font-bold mb-2 cursor-pointer text-left bg-transparent border-none p-0"
        onclick={() => {
          openSections.rarity = !openSections.rarity;
        }}
        >Rarity {#if [...filteredRarities].length}
          ({[...filteredRarities].length}){/if}</button
      >
      {#if openSections.rarity}
        <ul class="overflow-y-auto">
          {#each TowerRarity as rarity}
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={filteredRarities.has(rarity)}
                  onchange={(e) =>
                    toggleRarity(
                      rarity,
                      (e.target as HTMLInputElement).checked
                    )}
                />
                {rarity}
              </label>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
