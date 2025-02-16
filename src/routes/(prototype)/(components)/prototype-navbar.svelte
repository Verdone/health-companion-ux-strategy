<script>
	// @ts-nocheck

	import { Icons } from '$lib/components/icons';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import { onMount } from 'svelte';

	let dropdownOpen = false;
	let mobileMenuOpen = false;

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Close the dropdown when clicking outside
	onMount(() => {
		document.addEventListener('click', (event) => {
			const dropdown = document.getElementById('user-dropdown');
			const button = document.getElementById('user-menu-button');

			if (
				dropdown &&
				button &&
				!dropdown.contains(event.target) &&
				!button.contains(event.target)
			) {
				dropdownOpen = false;
			}
		});
	});
</script>

<nav
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div
		class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
	>
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<Icons.logo class="h-6 w-6" />
			<span
				class="self-center text-md sm:text-lg font-semibold whitespace-nowrap"
				>App Prototype</span
			>
		</a>

		<!-- Mobile Menu Button -->
		<button
			type="button"
			class="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			on:click={toggleMobileMenu}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				></path>
			</svg>
		</button>

		<!-- Desktop Navigation Links -->
		<div class="hidden md:flex space-x-8 rtl:space-x-reverse">
			<a
				href="/showcase/appointments"
				class="text-foreground hover:text-primary transition-colors"
				>Appointments</a
			>
			<a
				href="/showcase/medications"
				class="text-foreground hover:text-primary transition-colors"
				>Medications</a
			>
			<a
				href="/showcase/dashboard"
				class="text-foreground hover:text-primary transition-colors"
				>Dashboard</a
			>
			<a
				href="/showcase/reminders"
				class="text-foreground hover:text-primary transition-colors"
				>Reminders</a
			>
		</div>

		<!-- User Profile Menu -->
		<div class="relative flex items-center space-x-4 rtl:space-x-reverse">
			<ModeToggle />

			<button
				id="user-menu-button"
				type="button"
				on:click={toggleDropdown}
				class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
				aria-expanded={dropdownOpen}
			>
				<span class="sr-only">Open user menu</span>
				<img
					class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-600 object-cover aspect-square"
					src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="default user logo"
				/>
			</button>

			<!-- User Dropdown -->
			{#if dropdownOpen}
				<div
					id="user-dropdown"
					class="absolute top-0.5 right-0 mt-2 w-48 bg-background divide-y divide-foreground/10 rounded-lg shadow-lg"
				>
					<div class="px-4 py-3">
						<span class="block text-sm text-foreground">Sarah Thompson</span>
						<span class="block text-sm text-muted-foreground truncate"
							>name@example.ca</span
						>
					</div>
					<ul class="py-2">
						<li>
							<a
								href="/showcase/settings"
								class="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
								>Settings</a
							>
						</li>
						<li>
							<a
								href="/showcase/logout"
								class="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
								>Sign out</a
							>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="md:hidden bg-background/95 p-4 space-y-2">
			<a
				href="/showcase/appointments"
				class="block text-foreground/80 hover:text-foreground"
			>
				Appointments</a
			>
			<a
				href="/showcase/medications"
				class="block text-foreground/80 hover:text-foreground"
			>
				Medications</a
			>
			<a
				href="/showcase/dashboard"
				class="block text-foreground/80 hover:text-foreground"
			>
				Dashboard</a
			>
			<a
				href="/showcase/reminders"
				class="block text-foreground/80 hover:text-foreground"
			>
				Reminders</a
			>
		</div>
	{/if}
</nav>
