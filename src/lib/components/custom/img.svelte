<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { Search } from 'lucide-svelte'; // Import the magnifying glass icon

	type Props = {
		src: string;
		alt: string;
	};

	let { src, alt }: Props = $props();
	let imgElement: HTMLImageElement | null = null;

	function enterFullscreen() {
		if (!browser || !imgElement) return;

		if (imgElement.requestFullscreen) {
			imgElement.requestFullscreen().catch((err) => {
				console.error('Fullscreen request failed:', err);
			});
		} else if ((imgElement as any).webkitRequestFullscreen) {
			(imgElement as any).webkitRequestFullscreen(); // For Safari
		} else if ((imgElement as any).msRequestFullscreen) {
			(imgElement as any).msRequestFullscreen(); // For IE/Edge
		}
	}

	function exitFullscreen() {
		if (!browser || !document.fullscreenElement) return;

		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if ((document as any).webkitExitFullscreen) {
			(document as any).webkitExitFullscreen(); // For Safari
		} else if ((document as any).msExitFullscreen) {
			(document as any).msExitFullscreen(); // For IE/Edge
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (document.activeElement === imgElement?.parentElement) {
			if (event.key === ' ') {
				event.preventDefault();
				enterFullscreen();
			}

			if (event.key === 'Enter') {
				event.preventDefault();
				enterFullscreen();
			}
		}

		// Always allow Escape to exit fullscreen
		if (event.key === 'Escape') {
			exitFullscreen();
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

<button
	class="image-button focus:outline-primary focus:outline-offset-2 relative"
	onclick={enterFullscreen}
	onkeydown={handleKeydown}
	aria-label="View full-screen image"
>
	<!-- Magnifying Glass Icon -->
	<div class="absolute top-2 right-2 bg-black/50 rounded-full p-1">
		<Search size={18} class="text-white" />
	</div>

	<!-- Image -->
	<img
		bind:this={imgElement}
		{src}
		{alt}
		loading="lazy"
		class="rounded-sm border-4 border-solid border-primary"
	/>
</button>

<style>
	.image-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.image-button:hover .absolute {
		background: black;
		opacity: 0.8;
	}
</style>
