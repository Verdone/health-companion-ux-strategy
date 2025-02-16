<script lang="ts">
	import Activity from 'lucide-svelte/icons/activity';
	import Calendar from 'lucide-svelte/icons/calendar';
	import Heart from 'lucide-svelte/icons/heart';
	import Pill from 'lucide-svelte/icons/pill';
	import Users from 'lucide-svelte/icons/users';
	import { Overview, RecentAppointments } from './index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import DatePickerWithRange from './date-picker-with-range.svelte';
	import { Download } from 'lucide-svelte';
</script>

<div class="flex-col flex">
	<div class="flex-1 space-y-4 p-8 pt-6">
		<div
			class="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-2"
		>
			<h2 class="text-3xl font-bold tracking-tight">Healthcare Dashboard</h2>
			<div
				class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2"
			>
				<DatePickerWithRange />
				<Button size="sm">
					<Download class="mr-2 h-4 w-4" />
					Download Report as .PDF
				</Button>
			</div>
		</div>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="appointments" disabled>Personal</Tabs.Trigger>
				<Tabs.Trigger value="medications" disabled>Miscellaneous</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium"
								>Upcoming Appointments</Card.Title
							>
							<Calendar class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">March 2, 2025</div>
							<p class="text-muted-foreground text-xs">
								Kinesiologist: 9:00 AM at Terrebonne, QC
							</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Medications</Card.Title>
							<Pill class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">5 Active</div>
							<p class="text-muted-foreground text-xs">2 need refills soon</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Active Zone</Card.Title>
							<Activity class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">2,500 Kcal</div>
							<p class="text-muted-foreground text-xs">
								+200 more burned up from yesterday
							</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium"
								>Family Member Overview</Card.Title
							>
							<Users class="text-muted-foreground h-4 w-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">4 Members</div>
							<p class="text-muted-foreground text-xs">
								Last updated: yesterday
							</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="col-span-4">
						<Card.Header>
							<Card.Title>Daily Steps Overview</Card.Title>
						</Card.Header>
						<Card.Content>
							<Overview />
						</Card.Content>
					</Card.Root>
					<Card.Root class="col-span-3">
						<Card.Header>
							<Card.Title>Family Plan Overview</Card.Title>
							<Card.Description
								>4 appointments scheduled this month.</Card.Description
							>
						</Card.Header>
						<Card.Content>
							<RecentAppointments />
						</Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
