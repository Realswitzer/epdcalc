<script lang="ts">
	import LeftColumn from '$lib/components/LeftColumn.svelte';
	import MiddleColumn from '$lib/components/MiddleColumn.svelte';
	import RightColumn from '$lib/components/RightColumn.svelte';
	import CheckboxTest from '$lib/components/CheckboxTest.svelte';
</script>

<p>hi</p>
<div class="main">
	<LeftColumn />
	<MiddleColumn />
	<RightColumn />
</div>
<CheckboxTest />

<style>
	.main {
		display: flex;
	}
</style>
