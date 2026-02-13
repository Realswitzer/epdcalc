<script lang="ts">
  import type { stats } from "$lib/data/stats";

  let { statData = $bindable() as stats } = $props();
</script>

<details open>
  <ul>
    <li id={statData.name}>
      <h4>{statData.name}</h4>
      <span>Stats: {statData.stats.join(", ")}</span>
      <span>Formula: <code>{statData.formula}</code></span>
      <p>
        {statData.description}
      </p>
    </li>
  </ul>
</details>
