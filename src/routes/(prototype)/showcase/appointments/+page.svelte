<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Calendar, Search, MapPin, MessageCircle } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	let appointments = writable([
		{
			id: 1,
			date: '2025-03-10',
			time: '10:00 AM',
			doctor: 'Dr. Smith',
			location: 'Trois-Lacs Clinic',
			status: 'Booked'
		},
		{
			id: 2,
			date: '2025-03-12',
			time: '02:30 PM',
			doctor: 'Dr. Johnson',
			location: 'Downtown Medical Center',
			status: 'Available'
		},
		{
			id: 3,
			date: '2025-03-15',
			time: '11:00 AM',
			doctor: 'Dr. Lee',
			location: 'Green Valley Hospital',
			status: 'Scheduled'
		},
		{
			id: 4,
			date: '2025-03-20',
			time: '09:00 AM',
			doctor: 'Dr. Patel',
			location: 'Sunrise Family Care',
			status: 'Available'
		}
	]);

	let searchQuery = writable('');

	let filteredAppointments = writable([]);

	onMount(() => {
		appointments.subscribe((list) => {
			filteredAppointments.set(list);
		});
	});

	function searchAppointments(query) {
		searchQuery.set(query);
		appointments.subscribe((list) => {
			const results = list.filter(
				(appt) =>
					appt.doctor.toLowerCase().includes(query.toLowerCase()) ||
					appt.location.toLowerCase().includes(query.toLowerCase())
			);
			filteredAppointments.set(results);
		});
	}

	function bookAppointment(id) {
		appointments.update((list) =>
			list.map((appt) =>
				appt.id === id
					? {
							...appt,
							status: appt.status === 'Available' ? 'Scheduled' : 'Booked'
						}
					: appt
			)
		);
	}

	function messageDoctor(id) {
		alert(`Opening chat with doctor for appointment ID: ${id}`);
	}
</script>

<div class="h-full flex flex-col space-y-8 p-8">
	<div
		class="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0"
	>
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Available Appointments</h2>
			<p class="text-muted-foreground">
				Search and book available appointments with doctors in your area! Send a
				message if you have any questions about your booked appointments.
				Requests to cancel appointments must be sent 48 hours in advance.
			</p>
		</div>

		<div class="flex items-center gap-2 w-full sm:w-auto">
			<Input
				type="text"
				placeholder="Search another doctor or location..."
				bind:value={$searchQuery}
				on:input={(e) => searchAppointments(e.target.value)}
				class="w-full sm:w-64"
			/>
			<Search size={20} class="text-neutral-500" />
		</div>
	</div>

	<div class="w-full overflow-x-auto">
		<table class="w-full text-left border border-background/90 rounded-lg">
			<thead class="bg-background/80">
				<tr>
					<th class="p-3">Date</th>
					<th class="p-3">Time</th>
					<th class="p-3">Doctor</th>
					<th class="p-3">Location</th>
					<th class="p-3">Status</th>
					<th class="p-3 text-right">Action</th>
				</tr>
			</thead>
			<tbody>
				{#each $filteredAppointments as appt (appt.id)}
					<tr class="border-t border-background/80">
						<td class="p-3">{appt.date}</td>
						<td class="p-3">{appt.time}</td>
						<td class="p-3">{appt.doctor}</td>
						<td class="p-3 flex items-center gap-1">
							<MapPin size={16} class="text-neutral-500" />
							{appt.location}
						</td>
						<td class="p-3">
							{#if appt.status === 'Booked'}
								<span class="text-red-500 font-semibold">Booked</span>
							{:else if appt.status === 'Scheduled'}
								<span class="text-blue-500 font-semibold">Scheduled</span>
							{:else}
								<span class="text-green-500 font-semibold">Available</span>
							{/if}
						</td>
						<td class="p-3 text-right flex gap-2 justify-end">
							{#if appt.status === 'Available'}
								<Button class="gap-2" on:click={() => bookAppointment(appt.id)}>
									<Calendar size={16} />
									Book Appointment
								</Button>
							{:else if appt.status === 'Scheduled'}
								<Button
									class="gap-2"
									variant="outline"
									on:click={() => messageDoctor(appt.id)}
								>
									<MessageCircle size={16} />
									Live Message
								</Button>
							{/if}
							{#if appt.status === 'Booked'}
								<Button disabled class="opacity-50 cursor-not-allowed"
									>Booked</Button
								>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
