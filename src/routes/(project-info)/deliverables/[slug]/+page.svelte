<script lang="ts">
	import { dev } from '$app/environment';
	import { formatDate } from '$lib/utils/helpers.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
</svelte:head>

<!-- {#if dev}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if} -->

<article class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
	<h1 class="text-3xl font-bold capitalize">{data.title}</h1>

	<p class="mt-2 text-sm">
		Uploaded on {formatDate(data.meta.date)} by Giuliano Verdone.
	</p>

	<div class="mt-7">
		<h1 class="mb-6 text-xl font-semibold text-foreground/90">
			Design Topics Explored:
		</h1>
		<div class="flex flex-wrap gap-3">
			{#each data.meta.categories as category}
				<Badge variant="default">{category}</Badge>
			{/each}
		</div>
	</div>

	<div
		class="prose prose-sm dark:prose-invert sm:prose lg:prose-lg my-10 !text-justify"
	>
		<data.content />
	</div>

	<div class="flex justify-between mt-6">
		{#if data.prev}
			<Button variant="outline">
				<a href={`/deliverables/${data.prev}`} rel="external"
					>&larr; Previous Report</a
				>
			</Button>
		{/if}

		{#if data.next}
			<Button variant="default">
				<a href={`/deliverables/${data.next}`} rel="external"
					>Next Report &rarr;</a
				>
			</Button>
		{/if}
	</div>
</article>
