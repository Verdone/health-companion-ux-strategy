<script lang="ts">
	import { Icons } from '$lib/components';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils.js';

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<div
	class="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<Button
		href="/showcase"
		variant="outline"
		class="absolute right-4 top-4 md:right-8 md:top-8"
	>
		Register an Account
	</Button>
	<div
		class="bg-muted relative hidden h-full flex-col p-10 text-foreground lg:flex dark:border-r rounded-md"
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			class="absolute inset-0 bg-cover grayscale rounded-md"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
		/>
		<div
			class="relative z-20 flex items-center text-lg font-medium text-neutral-800"
		>
			HealthCare Super Inc.
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2 bg-background p-4 rounded-md">
				<p class="text-lg">
					&ldquo;This app has saved me countless hours and made it so much
					easier to manage my appointments and medications. It helps me stay on
					top of my health. Highly recommended!&rdquo;
				</p>
				<footer class="text-sm">Alex Carter</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div
			class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
		>
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					Example Logout/Login page
				</h1>
				<p class="text-muted-foreground text-sm">
					Enter your email below to create your account.
				</p>
			</div>
			<div class={cn('grid gap-6', className)} {...$$restProps}>
				<form on:submit|preventDefault={onSubmit}>
					<div class="grid gap-2">
						<div class="grid gap-1">
							<Label class="sr-only" for="email">Email</Label>
							<Input
								id="email"
								placeholder="name@example.ca"
								type="email"
								autocapitalize="none"
								autocomplete="email"
								autocorrect="off"
								disabled={isLoading}
							/>
						</div>
						<Button type="submit" disabled={isLoading}>
							{#if isLoading}
								<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Sign Up with Email
						</Button>
					</div>
				</form>
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<!-- svelte-ignore element_invalid_self_closing_tag -->
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background text-muted-foreground px-2">
							Or continue with
						</span>
					</div>
				</div>
				<Button variant="outline" type="button" disabled={isLoading}>
					{#if isLoading}
						<Icons.spinner class="mr-2 h-4 w-4 animate-spin" />
					{:else}
						<Icons.google class="mr-2 h-4 w-4" />
					{/if}
					Google Account
				</Button>
			</div>
			<p class="text-muted-foreground px-8 text-center text-sm">
				By clicking continue, you agree to our
				<a href={'#'} class="hover:text-primary underline underline-offset-4">
					Terms of Service
				</a>
				and
				<a href={'#'} class="hover:text-primary underline underline-offset-4">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
