<script lang="ts">
  let { selectedTowerKey = $bindable() as TowerId } = $props();
  import humanizeStat, { humanizeStats } from "$lib/humanize";
  import type { Tower, TowerId } from "epdcalc/types";
  import * as towers from "epdcalc/towers";
  import placeholder_png from "$lib/img/placeholder.png";

  let tower: Tower = $derived(towers[selectedTowerKey]);
  let towerUpgrade = $derived(tower.paths[0]);
  let humanized = $derived(humanizeStats(towerUpgrade));
</script>

<div id="TowerDetails" class="w-full h-full p-2">
  <div class="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 h-full min-h-0">
    <div class="col-span-2 h-8 flex items-center px-3 rounded bg-green-500">
      <span id="TowerDetailsName" class="font-bold text-lg text-center w-full"
        >{tower.name}</span
      >
    </div>

    <div class="grid grid-rows-[auto_1fr] gap-2 min-h-0">
      <div
        class="rounded flex items-center justify-center bg-gray-300 dark:bg-gray-800"
      >
        <img
          id="TowerDetailsImg"
          alt="image"
          aria-hidden="true"
          width="144"
          height="144"
          src={placeholder_png}
        />
      </div>
      <div
        id="TowerDetailsCalc"
        class="rounded p-0.5 bg-purple-500 w-full h-full"
      ></div>
    </div>

    <div class="grid grid-rows-2 gap-2 min-h-0">
      <div
        id="TowerDetailsStats"
        class="bg-gray-300 dark:bg-gray-800 rounded p-0.5 overflow-y-auto"
      >
        {#each humanized.stats as stat}
          {stat}<br />
        {/each}
      </div>
      <div
        id="TowerDetailsNextStats"
        class="bg-red-500 rounded p-0.5 overflow-y-auto"
      ></div>
    </div>

    <div class="grid grid-cols-2 grid-rows-[auto_auto] gap-2 col-span-2">
      <div class="rounded p-0.5 bg-pink-500 row-span-2">
        <span>Full Price:</span><br />
        <span>Sell Price:</span><br />
      </div>
      <div class="rounded p-0.5 bg-fuchsia-500">Upgrade Name</div>
      <div class="rounded p-0.5 bg-green-500">$5,000,000,000</div>
    </div>
  </div>
</div>
