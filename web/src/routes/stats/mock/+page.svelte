<script lang="ts">
  import type { Tower } from "epdcalc/types";
  import FilterPanel from "./components/FilterPanel.svelte";
  // import TowerGrid from "./components/TowerGrid.svelte";
  import TowerCard from "./components/TowerCard.svelte";
  import TowerDetails from "./components/TowerDetails.svelte";
  import SearchBar from "./components/SearchBar.svelte";

  let selectedTower: string | null = null;
  let filters = {
    types: new Set<string>(),
    rarity: new Set<string>(),
    variant: new Set<string>(),
    meta: new Set<string>(),
    searchQuery: <string>"",
  };
</script>

<div class="flex h-screen">
  <aside class="w-64 border-r rounded overflow-y-auto">
    <SearchBar bind:filters />
    <FilterPanel bind:filters />
  </aside>

  <main class="flex-1 overflow-y-auto">
    <!-- <TowerGrid /> -->
    <TowerCard />
  </main>

  {#if selectedTower}
    <aside class="w-80 border-l rounded overflow-y-auto">
      <TowerDetails {selectedTower} />
    </aside>
  {/if}
</div>
