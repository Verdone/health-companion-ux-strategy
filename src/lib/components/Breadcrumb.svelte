<script lang="ts">
	import { page } from '$app/stores';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			return { label: t, href: tokenPath };
		});

		// Add a way to get home too.
		crumbs.unshift({ label: 'Home', href: '/' });
	}
</script>

<div class="breadcrumb text-xs sm:text-sm md:text-md lg:text-lg">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			<span class="label text-primary">
				{c.label}
			</span>
		{:else}
			<a class="text-foreground" href={c.href}>{c.label}</a> &gt;&nbsp;
		{/if}
	{/each}
</div>

<style scoped>
	.breadcrumb {
		margin: 0 1.5rem;
		padding: 1rem 2rem;

		a {
			display: inline-block;
			padding: 0 0.5rem;
		}

		.label {
			padding-left: 0.5rem;
		}
	}
</style>
