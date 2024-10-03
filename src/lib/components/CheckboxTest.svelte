<script lang="ts">
	let checked: boolean[] = [];
	import { localize } from '$lib/ts-front/localize.ts';
	let modifiers = ['rad', 'scorch', 'rupture', 'frostbite'];
</script>

{#each modifiers as type}
	<label for={type}>
		<input type="checkbox" bind:checked={checked[type]} />
		{type}
		{#if checked[type]}
			<input
				name={type}
				type="number"
				step="0.1"
				class="input"
				min="0"
				placeholder={localize(type)}
				id={'input_' + type}
			/>
		{/if}
	</label>
{/each}

<style>
	.input {
		width: 60px;
	}
</style>
