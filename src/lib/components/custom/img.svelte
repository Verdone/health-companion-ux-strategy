<script lang="ts">
	type Props = {
		src: string;
		alt: string;
	};

	let { src, alt }: Props = $props();
</script>

<div class="flex items-center justify-center">
	<img {src} {alt} loading="lazy" class="rounded-sm border-4 border-solid border-primary" />
</div>
