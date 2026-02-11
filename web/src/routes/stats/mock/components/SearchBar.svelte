<script lang="ts">
  let { filters = $bindable() } = $props();
</script>

<input
  class="w-56 h-8 bg-gray-300 m-4 mb-0 p-2"
  bind:value={filters.searchQuery}
  placeholder="Search..."
/>
