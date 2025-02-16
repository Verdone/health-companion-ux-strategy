<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { formatDate } from '$lib/utils/helpers.js';
	import { CalendarDays } from 'lucide-svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	let { data } = $props();
</script>

<section class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
	<div class="mx-auto mb-12 max-w-screen-sm text-center lg:mb-16">
		<h2
			class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl"
		>
			Case Study / Mini-Project Deliverables
		</h2>
		<p class="font-light text-foreground/80 sm:text-xl">
			The results from this case study are presented below as {data.deliverables
				.length} separate written reports. Together, they make up the user experience
			(UX) strategy for this conceptual mobile app.
		</p>
	</div>
	<div class="grid gap-8 lg:grid-cols-2">
		{#each data.deliverables as deliverable, i}
			<Card.Root
				class="flex min-h-96 flex-col space-y-4 rounded-lg border p-2 shadow-md"
			>
				<Card.Header class="space-y-2">
					<Card.Title>{i + 1}. {deliverable.title}</Card.Title>
					<Card.Description>{deliverable.description}</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-1 items-center justify-center py-4">
					<img
						class="h-auto rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
						src={deliverable.imageUrl}
						alt="Visual Representation of {deliverable.title}"
					/>
				</Card.Content>
				<Card.Footer class="flex items-center justify-between md:space-x-4">
					<div class="flex items-center space-x-1 md:space-x-4">
						<CalendarDays class="size-4 md:ml-2" />
						<span class="text-xs md:text-sm">
							{formatDate(deliverable.date)}
						</span>
					</div>
					<Button
						size="lg"
						class="w-3/5"
						href={`/deliverables/${deliverable.slug}`}
					>
						Read More
						<ArrowRight class="size-4" />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
		<Card.Root
			class="flex min-h-96 flex-col space-y-4 rounded-lg border p-2 shadow-md"
		>
			<Card.Header class="space-y-2">
				<Card.Title>6. End Results</Card.Title>
				<Card.Description
					>See the results and grading for this case study.</Card.Description
				>
			</Card.Header>
			<Card.Content class="flex flex-1 items-center justify-center py-4">
				<img
					class="h-auto rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
					src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Visual Representation of Grades and Results"
				/>
			</Card.Content>
			<Card.Footer class="flex items-center justify-between md:space-x-4">
				<div class="flex items-center md:space-x-4">
					<CalendarDays class="ml-2 size-4" />
					<span class="text-sm"> May 4, 2025 </span>
				</div>
				<Button size="lg" class="w-3/5" disabled variant="outline">
					Coming Soon
					<ArrowRight class="size-4" />
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
