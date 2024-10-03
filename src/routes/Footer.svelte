<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
</script>

<footer>
	<p>
		built with <a class="svelte" href="https://kit.svelte.dev"
			><img
				src={logo}
				style="width: 16px; margin:0; vertical-align: middle;"
				alt="SvelteKit"
			/>SvelteKit</a
		>, made with ❤️ by
		<a class="author" href="https://codeberg.org/switzrr">sylvyon</a>
	</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
