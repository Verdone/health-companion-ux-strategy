<script lang="ts">
	import SiteFooter from '$lib/components/site-footer.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import PrototypeNavbar from './(components)/prototype-navbar.svelte';

	let { children } = $props();
</script>

<div class="relative flex min-h-screen flex-col bg-background">
	<PrototypeNavbar />
	<div class="container relative h-full flex-1 border-b py-6">
		<div class="my-3">
			<Breadcrumb />
		</div>
		{@render children?.()}
	</div>
	<SiteFooter />
</div>
