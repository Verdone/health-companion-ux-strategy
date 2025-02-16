<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="space-y-8">
	<div class="flex items-center">
		<Avatar.Root class="h-9 w-9">
			<Avatar.Fallback>OT</Avatar.Fallback>
		</Avatar.Root>
		<div class="ml-4 space-y-1">
			<p class="text-sm font-medium leading-none">Mom</p>
			<p class="text-muted-foreground text-sm">
				Next Appointment: Feb 15, 2025 - 10:00 AM
			</p>
		</div>
		<div class="ml-auto font-medium text-green-600">Check-in Pending</div>
	</div>
	<div class="flex items-center">
		<Avatar.Root class="h-9 w-9">
			<Avatar.Fallback>JT</Avatar.Fallback>
		</Avatar.Root>
		<div class="ml-4 space-y-1">
			<p class="text-sm font-medium leading-none">Dad</p>
			<p class="text-muted-foreground text-sm">
				Medication Reminder: Blood Pressure Meds - 8:00 AM
			</p>
		</div>
		<div class="ml-auto font-medium text-blue-400 dark:text-blue-200">
			Taken
		</div>
	</div>
	<div class="flex items-center">
		<Avatar.Root class="h-9 w-9">
			<Avatar.Fallback>IT</Avatar.Fallback>
		</Avatar.Root>
		<div class="ml-4 space-y-1">
			<p class="text-sm font-medium leading-none">Isabella Thompson</p>
			<p class="text-muted-foreground text-sm">
				Next Appointment: Feb 20, 2025 - 3:30 PM
			</p>
		</div>
		<div class="ml-auto font-medium text-red-600">Reschedule Needed</div>
	</div>
	<div class="flex items-center">
		<Avatar.Root class="h-9 w-9">
			<Avatar.Fallback>WT</Avatar.Fallback>
		</Avatar.Root>
		<div class="ml-4 space-y-1">
			<p class="text-sm font-medium leading-none">William Thompson</p>
			<p class="text-muted-foreground text-sm">
				Upcoming Test: Blood Work - Mar 22, 2025
			</p>
		</div>
		<div class="ml-auto font-medium text-yellow-600 dark:text-yellow-400 text">
			Preparation Required
		</div>
	</div>
	<div class="flex items-center">
		<Avatar.Root class="h-9 w-9">
			<Avatar.Fallback>ST</Avatar.Fallback>
		</Avatar.Root>
		<div class="ml-4 space-y-1">
			<p class="text-sm font-medium leading-none">Sofia Thompson</p>
			<p class="text-muted-foreground text-sm">
				Medication Reminder: Insulin - 7:00 PM
			</p>
		</div>
		<div class="ml-auto font-medium text-green-600">Confirmed</div>
	</div>
</div>
