<script lang="ts">
  import humanize from "$lib/humanize";

  let {
    tower = $bindable() as string,
    selectedTower = $bindable() as string | null,
  } = $props();
</script>

{#if tower}
  <button
    onclick={() => (selectedTower = selectedTower == tower ? null : tower)}
  >
    <div class="TowerCard w-32 h-32 bg-red-500 rounded border m-4">
      <div class="h-8 rounded border-b bg-white dark:bg-gray-900">
        <span class="text-center h-full w-full">{humanize(tower)}</span>
      </div>
      <img aria-hidden="true" alt="" />
    </div></button
  >
{/if}
