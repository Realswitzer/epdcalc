<script lang="ts">
  let { selectedTowerKey = $bindable() as TowerId } = $props();
  import humanizeStat, { formatNumber, humanizeStats } from "$lib/humanize";
  import type { Tower, TowerId } from "epdcalc/types";
  import * as towers from "epdcalc/towers";
  import placeholder_png from "$lib/img/placeholder.png";
  import humanize from "$lib/humanize";

  let tower: Tower = $derived(towers[selectedTowerKey]);
  let towerUpgrade = $derived(tower.paths[0]);
  let humanized = $derived(humanizeStats(towerUpgrade));
  // just get rid of this. yuck.
  // let nextUpgrade = $derived(() => {
  //   let currentLevel = towerUpgrade.level;
  //   if (currentLevel >= 7) {
  //     return null;
  //   } else {
  //     currentLevel++;
  //     if (currentLevel === 7) {
  //       return tower.paths[0];
  //     } else {
  //       return tower.levels.find((level) => level.level == currentLevel);
  //     }
  //   }
  // });
  // let humanizedNext = $derived(()=>{
  //   if (nextUpgrade && nextUpgrade !== null) {return humanizeStats(nextUpgrade)}
  //   else {return {stats: {}}}
  // })
</script>

<div id="TowerDetails" class="w-full h-full p-2">
  <div class="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 h-full min-h-0">
    <div
      class="col-span-2 h-8 flex items-center px-3 rounded bg-gray-300 dark:bg-gray-800"
    >
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
        class="rounded p-0.5 bg-purple-500 w-full h-full overflow-y-auto"
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
        class="bg-gray-300 dark:bg-gray-800 rounded p-0.5 overflow-y-auto"
      >
        <!-- {#each humanizedNext.stats as stat}
          {stat} <br />
        {/each} -->
      </div>
    </div>

    <div class="grid grid-cols-2 grid-rows-[auto_auto] gap-2 col-span-2">
      <div class="bg-gray-300 dark:bg-gray-800 rounded p-0.5 row-span-2">
        <span>Full Price: {undefined}</span><br />
        <span>Sell Price: {undefined}</span><br />
      </div>
      <div
        class="bg-gray-300 dark:bg-gray-800 rounded p-0.5 text-center text-shadow-xs text-shadow-black dark:text-shadow-white"
      >
        {towerUpgrade.name ||
          `Level ${towerUpgrade.level}${towerUpgrade.id || ""}`}
      </div>
      <div class="bg-gray-300 dark:bg-gray-800 rounded p-0.5 text-center">
        {formatNumber(towerUpgrade.price, { prefix: "$" })}
      </div>
    </div>
  </div>
</div>
