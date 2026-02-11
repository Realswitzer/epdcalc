<script lang="ts">
  import type { Tower } from "epdcalc/types";
  import FilterPanel from "./components/FilterPanel.svelte";
  // import TowerGrid from "./components/TowerGrid.svelte";
  import TowerDetails from "./components/TowerDetails.svelte";
  // import SearchBar from "./components/SearchBar.svelte";

  let selectedTower: string | null = null;
  let filters = {
    types: new Set<string>(),
    rarity: new Set<string>(),
    variant: new Set<string>(),
    meta: new Set<string>(),
  };
</script>

<div class="flex h-screen">
  <aside class="w-64 border-r overflow-y-auto">
    <FilterPanel bind:filters />
  </aside>

  <main class="flex-1 overflow-y-auto">
    <!-- <TowerGrid /> -->
  </main>

  <aside class="w-80 border-l overflow-y-auto">
    <TowerDetails {selectedTower} />
  </aside>
</div>
