<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';

	export let title: string = siteConfig.name;

	$: title = $page.data?.title ? `${$page.data.title} - ${siteConfig.name}` : siteConfig.name;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="Giuliano Verdone" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="EN_US" />
</svelte:head>
