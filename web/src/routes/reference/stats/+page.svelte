<script lang="ts">
  import { Stats, type stats } from "$lib/data/stats";
  import Stat from "./components/Stat.svelte";
</script>

{#each Object.entries(Stats) as [section, sectionValue]}
  <div id={section}>
    {#each Object.entries(sectionValue) as [stat, statData]}
      <Stat {statData} />
    {/each}
  </div>
{/each}
