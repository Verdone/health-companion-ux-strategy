<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let personas = [
        {
            name: "Alex Carter",
            role: "The Young Professional",
            description: "Uses apps daily but struggles with provider communication and medication tracking.",
            details: "Age: 25 | Employment: Full-time | Tech-Savviness: High",
            needs: "Needs a streamlined scheduling system and real-time provider communication."
        },
        {
            name: "Sarah Thompson",
            role: "The Caregiver Student",
            description: "Manages health for both herself and a family member, relying on paper planners and reminders.",
            details: "Age: 22 | Employment: Student & Part-time | Tech-Savviness: Moderate",
            needs: "Needs an easy-to-use, shared medication reminder system for multiple users."
        },
        {
            name: "Mark Davis",
            role: "The Health-Conscious Senior",
            description: "Uses medication reminder apps but needs accessibility support and simpler navigation.",
            details: "Age: 58 | Employment: Retired | Tech-Savviness: Low",
            needs: "Needs large text, voice-over support, and clear, automated appointment reminders."
        }
    ];
</script>

<Carousel.Root
	opts={{
		align: 'start'
	}}
	class="w-full">
	<Carousel.Content class="flex items-center align-middle">
		{#each personas as p}
			<Carousel.Item >
				<div class="p-1">
					<Card.Root class="flex min-h-72 flex-col">
						<Card.Header>
							<Card.Title>{p.name} - {p.role}</Card.Title>
								<Card.Description>{p.description}</Card.Description>
						</Card.Header>
						<Card.Content class="flex-grow">
							<p><strong>Details:</strong> {p.details}</p>
							<p><strong>Needs & Motivations:</strong> {p.needs}</p>
							<div class="flex items-center space-x-4">
								<Avatar.Root>
									<Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/5/55/Happy_man.jpg" alt="Sofia Davis" />
									<Avatar.Fallback>SD</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<p class="text-sm font-medium leading-none">Sofia Davis</p>
									<p class="text-muted-foreground text-sm">m@example.com</p>
								</div>
							</div>
						</Card.Content>
						<Card.Footer>
							footer
						</Card.Footer>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
