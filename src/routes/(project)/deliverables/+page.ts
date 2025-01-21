import type { Deliverable } from "$lib/types/deliverables"

export async function load({ fetch }) {
	const response = await fetch('api/deliverables')
	const deliverables: Deliverable[] = await response.json()
	return { deliverables }
}
