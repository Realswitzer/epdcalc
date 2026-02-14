<script lang="ts">
  import humanize from "$lib/humanize";
  import type { TowerId } from "epdcalc/types";
  // import * as towers from "epdcalc/towers"; // later, use this to derive names prob

  import placeholder_png from "$lib/img/placeholder.png";

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
    <div class="TowerCard w-40 h-40 bg-red-500 rounded border m-4">
      <div
        class="h-12 flex flex-col justify-center px-2 border-b bg-white dark:bg-gray-900"
      >
        <span class="block text-center leading-tight">
          {humanize(tower)}
        </span>
      </div>

      <div class="h-28 w-40 justify-center flex">
        <img
          class="max-h-28 max-w-40 object-contain"
          aria-hidden="true"
          alt=""
          src={placeholder_png}
        />
      </div>
    </div></button
  >
{/if}
