import { json } from '@sveltejs/kit'
import type { Deliverable } from '$lib/types/deliverables'

async function getDeliverables() {
	let deliverables: Deliverable[] = []

	const paths = import.meta.glob('/src/deliverables/*.svx', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.svx', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Deliverable, 'slug'>
			const post = { ...metadata, slug } satisfies Deliverable
			post.published && deliverables.push(post)
		}
	}

	deliverables = deliverables.sort((first, second) =>
    new Date(first.date).getTime() - new Date(second.date).getTime()
	)

	return deliverables
}

export async function GET() {
	const deliverables = await getDeliverables()
	return json(deliverables)
}

export const prerender = true
