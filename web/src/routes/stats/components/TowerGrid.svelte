<script lang="ts">
  import * as towers from "epdcalc/towers";
  import TowerCard from "./TowerCard.svelte";

  let { filters = $bindable(), selectedTowerKey = $bindable() } = $props();

  let towerKeys = Object.keys(towers);
</script>

<div
  id="TowerGrid"
  class="grid grid-cols-[repeat(auto-fill,9rem)] gap-x-8 justify-start"
>
  {#each towerKeys as tower}
    <TowerCard {tower} bind:selectedTowerKey />
  {/each}
</div>
