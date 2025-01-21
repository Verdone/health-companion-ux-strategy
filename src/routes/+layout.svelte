<script lang="ts">
	import '../app.css'; /* For Tailwind and shadcn-svelte */
	import '../prism.css'; /* For mdsvex's (markdown) code blocks */
	import { ModeWatcher } from 'mode-watcher';
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import Metadata from '$lib/components/metadata.svelte';

	let { children } = $props();
</script>

<ModeWatcher defaultMode={'dark'} />

<Metadata />

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<SiteHeader />
	<div class="container relative h-full flex-1 border-b py-6">
		{@render children?.()}
	</div>
	<SiteFooter />
</div>
