<script>
	import { resources } from './(data)/copywright';
</script>

<section class="mx-auto max-w-screen-xl px-4 py-8 text-justify lg:px-6 lg:py-16">
	<div class="mb-16">
		<h1
			id="website"
			class="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
		>
			About this Website
		</h1>
		<p class="mb-4 indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
			This case study / mini-project explores the design of a mobile application aimed at assisting
			individuals with chronic health conditions. The app would provide tools for managing
			medications, scheduling doctor appointments, and communicating with healthcare professionals.
			By focusing on UI/UX design principles, the goal is to develop a visual prototype that
			addresses the unique needs and challenges of various target audiences.
		</p>
		<p class="indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
			The study includes research, persona creation, user journey mapping, wireframing, prototyping,
			and usability testing — all of which contribute to the design process of a software
			engineering process. One motivation for taking the time to carefully make the right design
			choices is to hopefully mitigate the cost of future engineering resources.
		</p>
	</div>

	<div class="mb-16">
		<h1
			id="bio"
			class="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
		>
			About Me
		</h1>
		<p class="mb-4 indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad corrupti provident ullam quisquam
			impedit, numquam nostrum repellat officiis, corporis veniam, rerum est labore dolor! Provident
			officia cum voluptatum possimus aut adipisci debitis expedita facere neque, ut sequi explicabo
			natus nostrum delectus aspernatur ipsam! Aspernatur minus assumenda, explicabo harum ipsum
			eum.
		</p>
	</div>

	<div class="mb-16">
		<h1
			id="copywright"
			class="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
		>
			Copywright
		</h1>
		<p class="mb-6 text-lg font-normal text-foreground/80 lg:text-xl">
			The following third-party materials were used in the creation of this website:
		</p>
		<ul>
			{#each resources as resource}
				<li>
					<a
						href={resource.url}
						target="_blank"
						class="text-2xl text-primary text-primary/80 underline-offset-2 hover:underline"
						>{resource.name}</a
					>

					<p class="mb-6 font-light">
						{resource.licenseText} It is used under the terms of the
						<a
							href={resource.licenseUrl}
							target="_blank"
							class=" text-primary text-primary/80 underline-offset-2 hover:underline"
							>{resource.fullLicenseName}</a
						>.
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
