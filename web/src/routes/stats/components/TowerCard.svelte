<script lang="ts">
  import humanize from "$lib/humanize";
  import type { TowerId } from "epdcalc/types";
  // import * as towers from "epdcalc/towers"; // later, use this to derive names prob

  let {
    tower = $bindable() as string,
    selectedTowerKey = $bindable() as TowerId | null,
  } = $props();
</script>

{#if tower}
  <button
    onclick={() =>
      (selectedTowerKey =
        selectedTowerKey === tower ? null : (tower as TowerId))}
  >
    <div class="TowerCard w-32 h-32 bg-red-500 rounded border m-4">
      <div class="h-8 rounded border-b bg-white dark:bg-gray-900">
        <span class="text-center h-full w-full">{humanize(tower)}</span>
      </div>
      <img aria-hidden="true" alt="" />
    </div></button
  >
{/if}
