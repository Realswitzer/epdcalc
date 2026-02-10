<script lang="ts">
  import FilterPanel from "./components/FilterPanel.svelte";
  // import TowerGrid from "./components/TowerGrid.svelte";
  // import TowerDetails from "./components/TowerDetails.svelte";
  // import SearchBar from "./components/SearchBar.svelte";

  let selectedTower = $state(null);
  let filters = $state({
    types: new Set<string>(),
    rarities: new Set<string>(),
    search: "",
  });
</script>

<div class="flex h-screen">
  <aside class="w-64 border-r overflow-y-auto">
    <FilterPanel />
  </aside>

  <!-- <main class="flex-1 overflow-y-auto">
    <TowerGrid />
  </main>

  <aside class="w-80 border-l overflow-y-auto">
    <TowerDetails />
  </aside> -->
</div>
