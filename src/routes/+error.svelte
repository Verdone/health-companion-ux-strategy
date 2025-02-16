<script lang="ts">
	import { page } from '$app/state';
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import { Button } from '$lib/components/ui/button';
	import { HomeIcon } from 'lucide-svelte';
</script>

<SiteHeader />
<div class="container relative h-full flex-1 border-b py-6">
	<main class="container relative h-full flex-1 py-6">
		<section class="py-16">
			<div class="container mx-auto px-4 text-center">
				<h1 class="mb-4 text-4xl font-bold">
					Error: {page?.error?.message}
				</h1>
				<p class="mb-6 text-lg text-foreground/80">Looks like you're lost.</p>
				<div class="container flex justify-center space-x-4">
					<Button href="/">
						Return Home
						<HomeIcon class="ml-1 size-4" />
					</Button>
				</div>
			</div>
		</section>
	</main>
</div>
<SiteFooter />
