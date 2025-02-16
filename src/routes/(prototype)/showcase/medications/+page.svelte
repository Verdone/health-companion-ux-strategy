<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import {
		Calendar,
		Search,
		PlusCircle,
		Pill,
		Edit2,
		Check
	} from 'lucide-svelte';

	let medications = [
		{
			id: 1,
			name: 'Aspirin',
			dosage: '100mg',
			schedule: 'Morning',
			status: 'Active'
		},
		{
			id: 2,
			name: 'Metformin',
			dosage: '500mg',
			schedule: 'Twice a day',
			status: 'Active'
		},
		{
			id: 3,
			name: 'Lisinopril',
			dosage: '10mg',
			schedule: 'Evening',
			status: 'Paused'
		}
	];

	let searchQuery = '';
	let newMedName = '';
	let newMedDosage = '';
	let newMedSchedule = '';
	let editingId = null;

	let filteredMedications = [...medications];

	function searchMedications() {
		filteredMedications = medications.filter((med) =>
			med.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	function addMedication() {
		if (!newMedName || !newMedDosage || !newMedSchedule) return;

		medications.push({
			id: medications.length + 1,
			name: newMedName,
			dosage: newMedDosage,
			schedule: newMedSchedule,
			status: 'Active'
		});

		newMedName = '';
		newMedDosage = '';
		newMedSchedule = '';
		filteredMedications = [...medications];
	}

	function startEditing(id) {
		editingId = id;
	}

	function saveEdit(id) {
		editingId = null;
	}

	onMount(() => {
		filteredMedications = [...medications];
	});
</script>

<div class="h-full flex flex-col space-y-8 p-8">
	<div
		class="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0"
	>
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Medication Tracker</h2>
			<p class="text-muted-foreground">Track and manage your medications.</p>
		</div>
		<div class="flex items-center gap-2 w-full sm:w-auto">
			<Input
				type="text"
				placeholder="Search medication..."
				bind:value={searchQuery}
				on:input={searchMedications}
				class="w-full sm:w-64"
			/>
			<Search size={20} class="text-neutral-500" />
		</div>
	</div>
	<div class="bg-background/90 p-4 rounded-lg">
		<h3 class="text-lg font-semibold mb-2">Add New Medication</h3>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
			<Input
				type="text"
				placeholder="Medication Name"
				bind:value={newMedName}
			/>
			<Input
				type="text"
				placeholder="Dosage (e.g., 100mg)"
				bind:value={newMedDosage}
			/>
			<Input
				type="text"
				placeholder="Schedule (e.g., Morning, Night)"
				bind:value={newMedSchedule}
			/>
		</div>
		<Button
			class="mt-3 w-full sm:w-auto flex items-center gap-2"
			on:click={addMedication}
		>
			<PlusCircle size={16} />
			Add Medication
		</Button>
	</div>

	<div class="w-full overflow-x-auto">
		<table class="w-full text-left border bg-background/90 rounded-lg">
			<thead class="bg-background/80">
				<tr>
					<th class="p-3">Medication</th>
					<th class="p-3">Dosage</th>
					<th class="p-3">Schedule</th>
					<th class="p-3">Status</th>
					<th class="p-3 text-right">Manage</th>
				</tr>
			</thead>
			<tbody>
				{#each filteredMedications as med (med.id)}
					<tr class="border-t border-foreground/80">
						<td class="p-3 flex items-center gap-2">
							<Pill size={16} class="text-neutral-500" />
							{#if editingId === med.id}
								<Input
									type="text"
									bind:value={med.name}
									class="w-full text-sm"
								/>
							{:else}
								{med.name}
							{/if}
						</td>
						<td class="p-3">
							{#if editingId === med.id}
								<Input
									type="text"
									bind:value={med.dosage}
									class="w-full text-sm"
								/>
							{:else}
								{med.dosage}
							{/if}
						</td>
						<td class="p-3">
							{#if editingId === med.id}
								<Input
									type="text"
									bind:value={med.schedule}
									class="w-full text-sm"
								/>
							{:else}
								{med.schedule}
							{/if}
						</td>
						<td class="p-3">
							{#if med.status === 'Active'}
								<span class="text-green-500 font-semibold">Active</span>
							{:else}
								<span class="text-yellow-500 font-semibold">Paused</span>
							{/if}
						</td>
						<td class="p-3 text-right">
							{#if editingId === med.id}
								<Button class="px-2 py-1" on:click={() => saveEdit(med.id)}>
									<Check size={16} />
								</Button>
							{:else}
								<Button
									variant="ghost"
									class="px-2 py-1"
									on:click={() => startEditing(med.id)}
								>
									<Edit2 size={16} />
								</Button>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
