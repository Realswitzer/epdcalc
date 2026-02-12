<script lang="ts">
  import * as towers from "epdcalc/towers";
  import TowerCard from "./TowerCard.svelte";

  let { filters = $bindable(), selectedTowerKey = $bindable() } = $props();

  let towerKeys = Object.keys(towers);
</script>

<div id="TowerGrid" class="w-full h-full">
  {#each towerKeys as tower}
    <TowerCard {tower} bind:selectedTowerKey />
  {/each}
</div>
