<script lang="ts">
	import { Icons, MainNav, MobileNav, ModeToggle } from '$lib/components/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
	import { Figma } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<nav class="ml-auto flex items-center space-x-1">
				<a href={siteConfig.links.figma} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'h-8 w-8 px-0'
						)}
					>
						<Figma />
						<span class="sr-only">Figma</span>
					</div>
				</a>
				<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'h-8 w-8 px-0'
						)}
					>
						<Icons.gitHub class="h-4 w-4" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
				<ModeToggle />
			</nav>
		</div>
	</div>
</header>
