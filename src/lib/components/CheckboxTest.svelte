<script lang="ts">
	let checked: { [key: string]: boolean } = {};
	import { localize } from '$lib/ts-front/localize';
	let modifiers = ['rad', 'scorch', 'rupture', 'frostbite'];
</script>

{#each modifiers as type}
	<label>
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
