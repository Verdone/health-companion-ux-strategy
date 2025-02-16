<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let personas = [
		{
			name: 'Alex Carter',
			age: 25,
			role: 'The Young Professional',
			employment: 'Full-time',
			characteristics: ['Ambitious', 'Organized', 'Tech-savvy'],
			description:
				'Uses apps daily but struggles with provider communication and medication tracking.',
			needs:
				'Needs a streamlined scheduling system and real-time provider communication.',
			quotes: [
				'I often forget to follow up with my doctor on time.',
				'Scheduling appointments feels like a hassle.'
			],
			frustrations: [
				'Difficulty managing multiple healthcare provider portals.',
				'Lack of integration between apps.'
			],
			behaviours: [
				'Uses reminder apps for tasks.',
				'Prefers apps that sync across devices.'
			],
			useCases: [
				'Alex would use the app to quickly schedule medical appointments without juggling multiple portals.',
				'He would rely on real-time notifications to ensure he doesn’t miss follow-ups or deadlines.'
			],
			goals: [
				'To manage appointments efficiently without wasting time.',
				'To reduce missed follow-ups and improve healthcare management.'
			],
			image:
				'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			name: 'Sarah Thompson',
			age: 22,
			role: 'The Caregiver Student',
			employment: 'Student & Part-time',
			characteristics: ['Caring', 'Resourceful', 'Patient'],
			description:
				'Manages health for both herself and a family member, relying on paper planners and reminders.',
			needs:
				'Needs an easy-to-use, shared medication reminder system for multiple users.',
			quotes: [
				'I can’t keep track of all the medications my family needs.',
				'It’s hard to find a single app that works for everyone in my household.'
			],
			frustrations: [
				'Time-consuming to manually track medications.',
				'Lack of support for shared schedules in apps.'
			],
			behaviours: [
				'Switches between multiple tools to manage tasks.',
				'Relies heavily on family communication for coordination.'
			],
			useCases: [
				'Sarah would use the app to set up shared reminders for her and her family’s medications.',
				'She would use the app to coordinate schedules and ensure no doses are missed.'
			],
			goals: [
				'To ensure her family stays on top of their medications.',
				'To find a single tool to simplify healthcare management for multiple people.'
			],
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			name: 'Mark Davis',
			age: 58,
			role: 'The Health-Conscious Senior',
			employment: 'Retired',
			characteristics: ['Cautious', 'Persistent', 'Health-conscious'],
			description:
				'Uses medication reminder apps but needs accessibility support and simpler navigation.',
			needs:
				'Needs large text, voice-over support, and clear, automated appointment reminders.',
			quotes: [
				'I wish apps were easier to use for someone like me.',
				'The text is always too small on these apps.'
			],
			frustrations: [
				'Navigation in apps is often confusing.',
				'Accessibility features are rarely included; as someone with partial blindness, I usually increase the zoom levels heavily or just use a screen reader.'
			],
			behaviours: [
				'Often asks family members for tech support.',
				'Prefers apps with voice commands or minimal steps.'
			],
			useCases: [
				'Mark would rely on the app’s voice-over support to navigate easily.',
				'He would use the app’s large text and simple reminders to manage his medication schedule.'
			],
			goals: [
				'To use an app that is easy to navigate with minimal effort.',
				'To stay independent in managing his health with accessible features.'
			],
			image:
				'https://images.unsplash.com/photo-1608649672519-e8797a9560cf?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
</script>

<Carousel.Root
	opts={{
		align: 'start'
	}}
	class="w-full"
>
	<Carousel.Content class="flex items-center align-middle !text-left">
		{#each personas as p}
			<Carousel.Item>
				<div class="p-4">
					<Card.Root class="flex flex-col border rounded-lg shadow-md">
						<div class="flex items-center space-x-4 p-4 border-b">
							<img
								class="w-16 h-auto rounded-full"
								src={p.image}
								alt={p.name}
							/>
							<div>
								<Card.Title class="text-lg font-semibold">{p.name}</Card.Title>
								<Card.Description class="text-sm">{p.role}</Card.Description>
								<p class="text-sm">Age: {p.age}</p>
							</div>
						</div>
						<Card.Content class="p-4 space-y-4">
							<p>
								<strong>Description:</strong>
								{p.description}
							</p>
							<p>
								<strong>Employment:</strong>
								{p.employment}
							</p>
							<div>
								<strong>Characteristics:</strong>
								<ul class="pl-0 list-disc list-inside">
									{#each p.characteristics as characteristic}
										<li>{characteristic}</li>
									{/each}
								</ul>
							</div>
							<div>
								<strong>Needs & Motivations:</strong>
								{p.needs}
							</div>
							<div>
								<strong>Quotes:</strong>
								<ul class="pl-0 list-disc list-inside italic">
									{#each p.quotes as quote}
										<li>"{quote}"</li>
									{/each}
								</ul>
							</div>
							<div>
								<strong>Pain Points and Frustrations:</strong>
								<ul class="pl-0 list-disc list-inside">
									{#each p.frustrations as frustration}
										<li>{frustration}</li>
									{/each}
								</ul>
							</div>
							<div>
								<strong>Behaviours:</strong>
								<ul class="pl-0 list-disc list-inside">
									{#each p.behaviours as behaviour}
										<li>{behaviour}</li>
									{/each}
								</ul>
							</div>
							<div>
								<strong>Use Cases:</strong>
								<ul class="list-none pl-0 list-inside">
									{#each p.useCases as useCase}
										<li>{useCase}</li>
									{/each}
								</ul>
							</div>
							<div>
								<strong>Goals:</strong>
								<ul class="list-none pl-0 list-inside">
									{#each p.goals as goal}
										<li>{goal}</li>
									{/each}
								</ul>
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
