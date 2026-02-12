<script lang="ts">
  import * as towers from "epdcalc/towers";
  import * as towerMeta from "epdcalc/towerMeta";
  import TowerCard from "./TowerCard.svelte";

  let { filters = $bindable(), selectedTower = $bindable() } = $props();

  let towerKeys = Object.keys(towers)
    .concat(
      "zero_two",
      "vaporizer",
      "shrine_of_apollo",
      "raygunner",
      "pistolman",
    )
    .toSorted();
</script>

<div id="TowerGrid" class="w-full h-full">
  {#each towerKeys as tower}
    <TowerCard {tower} bind:selectedTower />
  {/each}
</div>
