<script lang="ts">
  let { selectedTower = $bindable() } = $props();
  import humanize from "$lib/humanize";
</script>

<div id="TowerDetails" class="w-full h-full p-2">
  <div class="grid grid-cols-2 grid-rows-[auto_1fr_1fr_auto] gap-2 h-full">
    <div class="col-span-2 h-8 flex items-center px-3 rounded">
      <span class="font-bold text-lg text-center w-full"
        >{humanize("Tower Name")}</span
      >
    </div>

    <div class="rounded flex items-center justify-center">
      <img alt="image" aria-hidden="true" width="100%" height="100%" src="" />
    </div>

    <div class="row-span-3 rounded p-0.5 overflow-y-auto"></div>

    <div class="rounded p-0.5"></div>

    <div class="rounded p-0.5">
      <span>Full Price:</span><br />
      <span>Sell Price:</span><br />
    </div>
  </div>
</div>
