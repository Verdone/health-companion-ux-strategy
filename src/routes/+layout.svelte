<script lang="ts">
	import '../app.css'; /* For Tailwind and shadcn-svelte */
	import '../prism.css'; /* For mdsvex's (markdown) code blocks */
	import { ModeWatcher } from 'mode-watcher';
	import Metadata from '$lib/components/metadata.svelte';

	let { children } = $props();
</script>

<ModeWatcher defaultMode={'dark'} />

<Metadata />

{@render children?.()}
