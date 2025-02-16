<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Plus } from 'lucide-svelte';
	import DataTable from './(components)/data-table.svelte';
	import { columns } from './(data)/columns';
	import { data } from './(data)/schema';
</script>

<div class="h-full flex-1 flex-col space-y-8 p-8 flex">
	<div
		class="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0"
	>
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
			<p class="text-muted-foreground">
				Here's a list of your reminders and tasks for this month! Select a date
				range to see other reminders you've set.
			</p>
		</div>

		<div class="flex">
			<Popover.Root>
				<Popover.Trigger class={buttonVariants({ variant: 'default' })}>
					<Plus size={16} />
					<span class="inline">Add New Reminder</span>
				</Popover.Trigger>
				<Popover.Content class="w-80">
					<div class="grid gap-4">
						<div class="space-y-2">
							<h4 class="font-medium leading-none">Dimensions</h4>
							<p class="text-muted-foreground text-sm">
								Set the dimensions for the layer.
							</p>
						</div>
						<div class="grid gap-2">
							<div class="grid grid-cols-3 items-center gap-4">
								<Label for="width">Width</Label>
								<Input id="width" value="100%" class="col-span-2 h-8" />
							</div>
							<div class="grid grid-cols-3 items-center gap-4">
								<Label for="maxWidth">Max. width</Label>
								<Input id="maxWidth" value="300px" class="col-span-2 h-8" />
							</div>
							<div class="grid grid-cols-3 items-center gap-4">
								<Label for="height">Height</Label>
								<Input id="height" value="25px" class="col-span-2 h-8" />
							</div>
							<div class="grid grid-cols-3 items-center gap-4">
								<Label for="maxHeight">Max. height</Label>
								<Input id="maxHeight" value="none" class="col-span-2 h-8" />
							</div>
						</div>
					</div>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>

	<DataTable {data} {columns} />
</div>
