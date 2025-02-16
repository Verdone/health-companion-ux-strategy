<script>
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, ClipboardList, Pill, Calendar } from 'lucide-svelte';
	import IPhone15Pro from '$lib/components/animation/IPhone15Pro.svelte';
	import homepageScreen from '$lib/assets/homepage.png';
	import homepageScreenDark from '$lib/assets/homepage-dark.png';
	import homepageScreenDesktop from '$lib/assets/desktop-homepage.png';
	import homepageScreenDarkDesktop from '$lib/assets/desktop-homepage-dark.png';
	import { mode } from 'mode-watcher';
	import Safari from '$lib/components/animation/Safari.svelte';
	import { siteConfig } from '$lib/config/site';
</script>

<div
	class="relative flex min-h-screen flex-col bg-background"
	id="page"
	data-vaul-drawer-wrapper
>
	<SiteHeader />
	<main class="container relative h-full flex-1 border-b py-16">
		<!-- Hero Section -->
		<section class="py-16">
			<div class="container mx-auto px-4 text-center">
				<h1 class="mb-4 text-4xl font-bold">
					Introducing
					<span class="animate-pulse text-red-500 dark:text-red-400"
						>Health Companion &#x2661;</span
					>
				</h1>
				<p class="mb-6 text-lg text-foreground/80">
					A case study for a "super app" to help manage personal healthcare with
					ease.
				</p>
				<div class="container flex justify-center space-x-4">
					<Button href="/showcase">
						Explore Prototype
						<ArrowRight class="ml-1 size-4" />
					</Button>
					<Button variant="outline" href="/deliverables"
						>Deliverable Reports</Button
					>
				</div>
			</div>
		</section>

		<div class="flex mb-16 justify-center items-center">
			<div class="hidden lg:flex">
				<Safari
					url={siteConfig.url}
					imageSrc={$mode === 'dark'
						? homepageScreenDarkDesktop
						: homepageScreenDesktop}
				/>
			</div>
			<div class="lg:hidden">
				<IPhone15Pro
					src={$mode === 'dark' ? homepageScreenDark : homepageScreen}
				/>
			</div>
		</div>

		<section class="py-16 bg-gray-200 dark:bg-gray-700 rounded-sm">
			<div class="container mx-auto px-4 text-center">
				<h2 class="mb-6 text-3xl font-bold">Application Features</h2>
				<div
					class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
				>
					<div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
						<div class="flex items-center justify-center">
							<Calendar size={20} />
						</div>
						<h3 class="text-xl font-semibold">Appointment Management</h3>
						<p class="mt-2 text-gray-600 dark:text-gray-400">
							Book, reschedule, and manage healthcare appointments effortlessly.
						</p>
					</div>
					<div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
						<div class="flex items-center justify-center">
							<Pill size={20} />
						</div>
						<h3 class="text-xl font-semibold">Medication Tracking</h3>
						<p class="mt-2 text-gray-600 dark:text-gray-400">
							Set reminders and track daily medications with ease.
						</p>
					</div>
					<div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
						<div class="flex items-center justify-center">
							<ClipboardList size={20} />
						</div>
						<h3 class="text-xl font-semibold">Health Dashboard</h3>
						<p class="mt-2 text-gray-600 dark:text-gray-400">
							Monitor your vitals, sync with wearable devices, and keep track of
							your family plan.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16">
			<div class="container mx-auto px-4 text-center">
				<h2 class="mb-4 text-3xl font-bold">Figma Showcase</h2>
				<p class="mb-6 text-lg text-foreground/80">
					Explore the personas, user journey and early prototype mockups.
				</p>
				<div class="flex items-center justify-center">
					<iframe
						title="figma showcase"
						style="border: 1px solid rgba(0, 0, 0, 0.1);"
						class="rounded-sm"
						width="800"
						height="450"
						src="https://embed.figma.com/board/jzcSctJtZTzZmrwf0H0fdr/User-Journey-Maps?embed-host=share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</section>

		<section class="py-16">
			<div class="container mx-auto px-4 text-center">
				<h2 class="mb-6 text-3xl font-bold">What AI-Generated Users Say</h2>
				<div
					class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center"
				>
					<div class="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow">
						<p class="text-lg font-semibold text-foreground">
							"This app changed how I manage my health!"
						</p>
						<p class="mt-2 text-foreground/80">
							- Alex Carter, Busy Professional
						</p>
					</div>
					<div class="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow">
						<p class="text-lg font-semibold text-foreground">
							"My family now stays on top of medications easily."
						</p>
						<p class="mt-2 text-foreground/80">
							- Sarah Thompson, Family Caregiver
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<SiteFooter />
</div>
