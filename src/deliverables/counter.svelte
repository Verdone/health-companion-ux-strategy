<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	let count = $state(0);
</script>

<Button onclick={() => count++}>
	clicks: {count}
</Button>
