<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="py-16">
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-4 text-4xl font-bold">
			Introducing
			<span class="animate-pulse text-red-500 dark:text-red-400"> Health Companion &#x2661;</span>
		</h1>
		<p class="mb-6 text-lg text-foreground/80">
			A case study for a "super app" to help manage personal healthcare with ease.
		</p>
		<div class="container flex justify-center space-x-4">
			<Button href="/deliverables">
				Explore Contents
				<ArrowRight class="ml-1 size-4" />
			</Button>
			<Button variant="outline" href="/about">More Information</Button>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-4 text-4xl font-bold">Showcase</h1>
		<p class="mb-6 text-lg text-foreground/80">Coming Soon! Stay tuned for a collection mockups.</p>
	</div>
</section>
