<script>
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button'; // shadcn-svelte button
	import * as Card from '$lib/components/ui/card'; // shadcn-svelte card
	import {
		CalendarDays,
		ArrowRight,
		AppWindow,
		ClipboardList,
		AlarmClock,
		Pill,
		Cog,
		LogIn
	} from 'lucide-svelte';
	import DotPattern from '$lib/components/animation/DotPattern.svelte';

	let showcaseSections = [
		{
			title: 'Appointments',
			description: 'View and book appointments with doctors.',
			imageUrl:
				'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '/showcase/appointments',
			icon: AppWindow
		},
		{
			title: 'Medications',
			description: 'Track and manage your medications.',
			imageUrl:
				'https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '/showcase/medications',
			icon: Pill
		},
		{
			title: 'Dashboard',
			description: 'Get an overview of your health and reminders.',
			imageUrl:
				'https://images.unsplash.com/photo-1549890762-0a3f8933bc76?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '/showcase/dashboard',
			icon: ClipboardList
		},
		{
			title: 'Reminders',
			description: 'Set and track reminders for medications and appointments.',
			imageUrl:
				'https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '/showcase/reminders',
			icon: AlarmClock
		},
		{
			title: 'Settings',
			description:
				'Customize your preferences, enable a11y settings, and more.',
			imageUrl:
				'https://images.unsplash.com/photo-1563641749712-028dfeab14b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2VhcnxlbnwwfHwwfHx8MA%3D%3D',
			link: '/showcase/settings',
			icon: Cog
		},
		{
			title: 'Login/Logout Page',
			description:
				'An example page for logging in to access your profile and data.',
			imageUrl:
				'https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			link: '/showcase/logout',
			icon: LogIn
		}
	];
</script>

<div class="h-full flex flex-col space-y-8 p-8">
	<section
		class="relative mx-auto mt-8 max-w-7xl px-6 pt-16 text-center md:px-8"
	>
		<h1
			class="text-balance bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
		>
			Welcome to the HealthCare App Prototype!
		</h1>

		<p
			class="my-12 text-balance text-lg tracking-tight text-foreground/90 md:text-xl"
		>
			This is the prototype showcase from the "Health Companion" mini-project
			that builds off of the wireframes from deliverable 3. While this is meant
			to be a mobile app, it was more convenient to showcase the prototype pages
			on this website. At any time, click on "App Prototype" at the top left (or
			"Home" on the site breadcrumbs,) to return to the full case study.
		</p>

		<!-- Scroll icon -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="#sec-2">
			<div class="scroll-down z-10"></div>
		</a>
		<!-- end of Scroll icon -->

		<DotPattern
			class="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
		/>

		<div
			class="relative my-32 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
		>
			<div class="relative rounded-xl bg-white bg-opacity-[0.01]"></div>
		</div>
	</section>

	<section
		id="sec-2"
		class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16"
	>
		<div class="mx-auto mb-12 max-w-screen-sm text-center">
			<h2
				class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl"
			>
				Explore the Features
			</h2>
			<p class="font-light text-foreground/80 sm:text-xl">
				Since this is a prototype, this homepage has some annotations to walk
				the marker through each implemented page. Regardless, the features would
				still be outlined as shown below to remain faithful to the homepage
				wireframe. Click on any of the options below to view the available
				features.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
			{#each showcaseSections as section}
				<Card.Root
					class="flex min-h-96 flex-col space-y-4 rounded-lg border p-4 shadow-md"
				>
					<Card.Header class="space-y-2">
						<Card.Title class="flex items-center gap-2 mb-2">
							<section.icon size={20} />
							{section.title}
						</Card.Title>
						<Card.Description>{section.description}</Card.Description>
					</Card.Header>
					<Card.Content class="flex flex-1 items-center justify-center py-4">
						<img
							class="h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0"
							src={section.imageUrl}
							alt="Visual Representation of {section.title}"
						/>
					</Card.Content>
					<Card.Footer class="flex items-center justify-between md:space-x-4">
						<Button size="lg" class="w-full" href={section.link}>
							Explore
							<ArrowRight class="size-4" />
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</section>
</div>

<style scoped>
	.scroll-down {
		height: 50px;
		width: 30px;
		border: 2px solid hsl(var(--foreground));
		position: absolute;
		left: 49%;
		bottom: 20px;
		border-radius: 50px;
		cursor: pointer;
	}
	.scroll-down::before,
	.scroll-down::after {
		content: '';
		position: absolute;
		top: 20%;
		left: 50%;
		height: 10px;
		width: 10px;
		transform: translate(-50%, -100%) rotate(45deg);
		border: 2px solid hsl(var(--foreground));
		border-top: transparent;
		border-left: transparent;
		animation: scroll-down 1s ease-in-out infinite;
	}
	.scroll-down::before {
		top: 30%;
		animation-delay: 0.3s;
		animation: scroll-down 1s ease-in-out infinite;
	}

	@keyframes scroll-down {
		0% {
			/* top:20%; */
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			top: 90%;
			opacity: 0;
		}
	}
</style>
