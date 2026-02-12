<script lang="ts">
  import FilterPanel from "./components/FilterPanel.svelte";
  import TowerGrid from "./components/TowerGrid.svelte";
  import TowerDetails from "./components/TowerDetails.svelte";
  import SearchBar from "./components/SearchBar.svelte";
  import type { Tower, TowerId } from "epdcalc/types";
  import { towers } from "epdcalc";

  let selectedTowerKey: TowerId | null = $state(null);

  let filters = $state({
    types: new Set<string>(),
    rarity: new Set<string>(),
    variant: new Set<string>(),
    meta: new Set<string>(),
    searchQuery: <string>"",
  });
</script>

<div class="flex h-screen">
  <aside class="w-64 border-r rounded overflow-y-auto">
    <SearchBar bind:filters />
    <FilterPanel bind:filters />
  </aside>

  <main class="flex-1 overflow-y-auto">
    <TowerGrid bind:filters bind:selectedTowerKey />
    <!-- <TowerCard /> -->
  </main>

  {#if selectedTowerKey}
    <aside class="w-80 border-l rounded overflow-y-auto">
      <TowerDetails {selectedTowerKey} />
    </aside>
  {/if}
</div>
