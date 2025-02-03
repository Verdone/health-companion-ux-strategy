<script lang="ts">
	import { Icons } from '../icons/index.js';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils.js';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold md:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		<a
			href="/deliverables"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname === '/deliverables' ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Deliverables
		</a>
		<a
			href="/about"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/about') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			About
		</a>
		<a
			href="/showcase"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/showcase') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Showcase
		</a>
	</nav>
</div>
