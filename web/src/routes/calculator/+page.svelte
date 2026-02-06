<script lang="ts">
  import { towers } from "epdcalc";
  import { TowerInstance } from "epdcalc/instance";
  import { damagePerAction } from "epdcalc/formulas";
  import { TowerType, type Tower } from "epdcalc/types";

  let towerList = Object.entries(towers).map(([key, tower]) => ({
    key,
    ...tower,
  }));

  let search = "";
  let filterType: TowerType[] = [
    TowerType.Offense,
    TowerType.Defense,
    TowerType.Generator,
    TowerType.Support,
  ];
  let filterRarity: "all" | string = "all";
  let sortMode: "name" | "rarity" | "type" = "name";

  let filtered = towerList.filter((t) => filterType.filter((f) => t.type));
</script>

<select id="towers">
  {#each Object.keys(towers) as tower}
    <option id={tower}>{tower}</option>
  {/each}
</select>
