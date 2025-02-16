<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';

	export let title: string = siteConfig.name;

	$: title = $page.data?.title
		? `${$page.data.title} - ${siteConfig.name}`
		: siteConfig.name;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="Giuliano Verdone" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="EN_US" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={siteConfig.url + $page.url.pathname} />
	<meta
		property="og:image"
		content="https://images.unsplash.com/photo-1625134673337-519d4d10b313?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>
	<meta property="og:image:alt" content={siteConfig.name} />
	<meta property="og:image:width" content="1920" />
	<meta property="og:image:height" content="724" />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="EN_US" />
</svelte:head>
