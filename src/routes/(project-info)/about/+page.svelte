<script>
	import { resources } from './(data)/copywright';
</script>

<section
	class="mx-auto max-w-screen-xl px-4 py-8 text-justify lg:px-6 lg:py-16"
>
	<div class="mb-16">
		<h1
			id="about"
			class="mb-6 text-4xl font-bold leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl"
		>
			About this Application
		</h1>
		<p class="mb-4 indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
			This case study / mini-project explores the design of a mobile application
			aimed at assisting individuals with chronic health conditions. The app
			would provide tools for managing medications, scheduling doctor
			appointments, and communicating with healthcare professionals. By focusing
			on UI/UX design principles, the goal is to develop a visual prototype that
			addresses the unique needs and challenges of various target audiences.
		</p>
		<p class="indent-5 text-lg font-normal text-foreground/80 lg:text-xl">
			The study includes research, persona creation, user journey mapping,
			wireframing, prototyping, and usability testing — all of which are part of
			the interaction design process. One motivation for taking the time to
			carefully make good choices in the Design Model is to hopefully mitigate
			the cost of engineering resources down the line. Another motivation is to
			ensure the best possible experience for end users, clients, and
			stakeholders.
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
			The creation of this app would not be possible without the following
			third-party materials:
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
