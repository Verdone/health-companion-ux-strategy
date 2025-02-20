<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let profileImage =
		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
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
				src={profileImage}
				alt="Profile"
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
		aria-labelledby="location-info-heading"
	>
		<h2
			id="location-info-heading"
			class="text-xl font-semibold text-foreground"
		>
			Location Details
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<input
				bind:value={country}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Country"
				aria-label="Country"
			/>
			<input
				bind:value={city}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="City"
				aria-label="City"
			/>
			<input
				bind:value={address}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Address"
				aria-label="Address"
			/>
			<input
				bind:value={zipCode}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Zip Code"
				aria-label="Zip Code"
			/>
		</div>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save Location Details">Save Location Details</button
		>
	</div>

	<div
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="organization-info-heading"
	>
		<h2
			id="organization-info-heading"
			class="text-xl font-semibold text-foreground"
		>
			Organization Details
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<input
				bind:value={organization}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Organization"
				aria-label="Organization"
			/>
			<input
				bind:value={role}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Role"
				aria-label="Role"
			/>
			<input
				bind:value={department}
				class="p-2 border border-border rounded bg-background text-foreground"
				placeholder="Department"
				aria-label="Department"
			/>
		</div>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save Organization Details">Save Organization Details</button
		>
	</div>

	<div
		class="bg-background p-6 rounded-lg shadow"
		role="region"
		aria-labelledby="notification-settings-heading"
	>
		<h2
			id="notification-settings-heading"
			class="text-xl font-semibold text-foreground"
		>
			Notification Settings
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={companyNews} />
				<span>Company News</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={accountActivity} />
				<span>Account Activity</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={meetups} />
				<span>Meetups</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={newMessages} />
				<span>New Messages</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={itemUpdate} />
				<span>Item Updates</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={itemComment} />
				<span>Item Comments</span></label
			>
			<label class="flex items-center space-x-3"
				><input type="checkbox" bind:checked={buyerReview} />
				<span>Buyer Reviews</span></label
			>
		</div>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save Notification Settings">Save Notification Settings</button
		>
	</div>

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
		<label class="flex items-center space-x-3"
			><input type="checkbox" bind:checked={dyslexiaFont} />
			<span>Dyslexia-Friendly Font</span></label
		>
		<label class="flex items-center space-x-3"
			><input type="checkbox" bind:checked={screenReader} />
			<span>Enable Screen Reader Mode</span></label
		>
		<label class="flex items-center space-x-3"
			><input type="checkbox" bind:checked={autismFriendly} />
			<span>Autism-Friendly Mode</span></label
		>
		<label class="flex items-center space-x-3"
			><input type="checkbox" bind:checked={zoomText} />
			<span>Zoom Text</span></label
		>
		<label class="flex items-center space-x-3">
			<span>Colorblind Mode:</span>
			<select
				bind:value={colorblindMode}
				class="p-2 border border-border rounded bg-background text-foreground"
			>
				<option value="">None</option>
				<option value="protanopia">Protanopia</option>
				<option value="deuteranopia">Deuteranopia</option>
				<option value="tritanopia">Tritanopia</option>
			</select>
		</label>
		<button
			class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
			type="submit"
			aria-label="Save Accessibility Settings"
			>Save Accessibility Settings</button
		>
	</div>
</div>
