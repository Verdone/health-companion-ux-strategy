<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let profileImage =
		'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106';
	let firstName = '';
	let lastName = '';
	let email = 'name@example.ca';
	let phone = '';
	let country = 'Canada';
	let city = '';
	let address = '';
	let organization = '';
	let role = '';
	let department = '';
	let zipCode = '';
	let password = '';
	let newPassword = '';
	let confirmPassword = '';

	let companyNews = false;
	let accountActivity = true;
	let meetups = true;
	let newMessages = false;
	const ratingReminders = false;
	let itemUpdate = true;
	let itemComment = true;
	let buyerReview = false;
	let dyslexiaFont = false;
	let screenReader = false;
	let generalA11y = false;
	let autismFriendly = false;
	let zoomText = false;
	let colorblindMode = '';

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (file) {
			profileImage = URL.createObjectURL(file);
		}
	}

	function handleSubmit() {
		alert('Settings saved!');
	}
</script>

<div
	class="p-6 space-y-6 bg-background"
	role="main"
	aria-labelledby="user-settings-heading"
>
	<h1 id="user-settings-heading" class="text-2xl font-semibold text-foreground">
		User Settings
	</h1>

	<div
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="profile-picture-heading"
	>
		<h2
			id="profile-picture-heading"
			class="text-xl font-semibold text-foreground"
		>
			Profile Picture
		</h2>
		<div class="flex items-center space-x-4">
			<img
				class="w-28 h-28 rounded-lg object-cover aspect-square"
				src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Default Profile Icon"
			/>
			<div>
				<input
					type="file"
					accept="image/*"
					class="block w-full text-sm text-foreground border border-border rounded-lg cursor-pointer"
					on:change={handleFileUpload}
					aria-label="Upload a new profile picture"
				/>
			</div>
		</div>
	</div>

	<form
		on:submit|preventDefault={handleSubmit}
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="general-info-heading"
	>
		<h2 id="general-info-heading" class="text-xl font-semibold text-foreground">
			General Information
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<input
				bind:value={firstName}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="First Name"
				aria-label="First Name"
			/>
			<input
				bind:value={lastName}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Last Name"
				aria-label="Last Name"
			/>
			<input
				bind:value={email}
				class="p-2 border border-border rounded bg-background text-foreground"
				type="email"
				placeholder="Email"
				aria-label="Email Address"
			/>
			<input
				bind:value={phone}
				class="p-2 border border-border rounded bg-background text-foreground"
				type="tel"
				placeholder="Phone Number"
				aria-label="Phone Number"
			/>
		</div>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save general information">Save</button
		>
	</form>

	<div
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="password-heading"
	>
		<h2 id="password-heading" class="text-xl font-semibold text-foreground">
			Password
		</h2>
		<input
			bind:value={password}
			class="p-2 border border-border rounded w-full bg-background text-foreground"
			type="password"
			placeholder="Current Password"
			aria-label="Current Password"
		/>
		<input
			bind:value={newPassword}
			class="p-2 border border-border rounded w-full mt-2 bg-background text-foreground"
			type="password"
			placeholder="New Password"
			aria-label="New Password"
		/>
		<input
			bind:value={confirmPassword}
			class="p-2 border border-border rounded w-full mt-2 bg-background text-foreground"
			type="password"
			placeholder="Confirm Password"
			aria-label="Confirm New Password"
		/>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Update Password">Update Password</button
		>
	</div>

	<div
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="a11y-settings-heading"
	>
		<h2
			id="a11y-settings-heading"
			class="text-xl font-semibold text-foreground"
		>
			Accessibility Settings
		</h2>
		<label class="flex items-center space-x-3">
			<input
				type="checkbox"
				bind:checked={dyslexiaFont}
				aria-label="Enable Dyslexia-Friendly Font"
			/>
			<span>Dyslexia-Friendly Font</span>
		</label>
		<label class="flex items-center space-x-3">
			<input
				type="checkbox"
				bind:checked={screenReader}
				aria-label="Enable Screen Reader Mode"
			/>
			<span>Enable Screen Reader Mode</span>
		</label>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save Accessibility Settings"
			>Save Accessibility Settings</button
		>
	</div>
</div>
