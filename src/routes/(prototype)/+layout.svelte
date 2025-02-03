<script lang="ts">
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<div class="container relative h-full flex-1 border-b py-6">
		{@render children?.()}
	</div>
	<SiteFooter />
</div>
