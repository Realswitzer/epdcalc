<script lang="ts">
  import { towers } from "epdcalc";
  import { TowerInstance } from "epdcalc/instance";
  import { damagePerAction } from "epdcalc/formulas";
  import type { Tower } from "epdcalc/types";

  let selected = towers.elder_godfather;
  let upgrade = selected.paths[1];
</script>

<select id="towers">
  {#each Object.keys(towers) as tower}
    <option id={tower}>{tower}</option>
  {/each}
</select>
