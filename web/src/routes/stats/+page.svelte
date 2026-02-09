<script lang="ts">
  import { towers } from "epdcalc";
  import { TowerInstance } from "epdcalc/instance";
  import { damagePerAction } from "epdcalc/formulas";
  import { GeneratorType, TowerType, type Tower } from "epdcalc/types";

  let towerList = Object.entries(towers).map(([key, tower]) => ({
    key,
    ...tower,
  }));

  let search = $state("");
  let filterType: TowerType[] = [
    TowerType.Offense,
    TowerType.Defense,
    TowerType.Generator,
    TowerType.Support,
  ];
  let filterGeneratorType: GeneratorType[] = [
    GeneratorType.Time,
    GeneratorType.Wave,
  ];
  let filterRarity: "all" | string = "all";
  let sortMode: "name" | "rarity" | "type" = "name";

  // let filtered = towerList.filter((t) => filterType.filter((f) => t.type));
  let filtered = $derived(
    towerList.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
  );
</script>

<select id="towers">
  {#each Object.keys(towers) as tower}
    <option id={tower}>{tower}</option>
  {/each}
</select>
