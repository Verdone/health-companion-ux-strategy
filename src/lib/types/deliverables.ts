export type Categories = 'sveltekit' | 'svelte'

export type Deliverable = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
	imageUrl: string
}
