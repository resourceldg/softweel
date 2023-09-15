<script lang="ts">
	import Events from '$components/Events.svelte';
	import Siren from '$components/Siren.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section
	class="mx-auto grid gap-4 lg:gap-16 lg:flex lg:my-36 place-items-center text-center lg:text-left"
>
	<Siren classes="max-w-[400px] w-full motion-safe:animate-float" />
	<div class="max-w-xl grid gap-6 place-items-center lg:place-items-start">
		<h1 class="sm:text-left gradient-text">Tecnologías de calidad</h1>

		<h2 class="text-lg">
			Webs | Apps | Sistemas | Plataformas
			<div class="grid lg:flex w-full gap-4 justify-center lg:justify-start">
				<a
					class="btn btn-primary"
					rel="noopener noreferrer"
					target="_blank"
					href="https://wa.me/+5492236202061?text=Hola, %20bienvenido%20a%20Softweel%Sistemas%20...%20"
				>
					Solicitar Presupuesto
				</a>
				<a
					data-sveltekit-preload-code
					class="btn btn-secondary"
					rel="noopener noreferrer"
					target="_blank"
					href="/contact"
				>
					Become a Speaker
				</a>
			</div>
			<a
				rel="external"
				href="/calendar"
				class="p-0 font-bold text-primary-600 transition-colors dark:text-primary-200 items-center whitespace-normal flex gap-2"
			>
				<img src="/images/calendar.svg" alt="" class="w-[36px]" />
				<span>Add Events to Google Calendar</span>
			</a>
		</h2>
	</div>
</section>

{#if data.upcomingEvents.length}
	<section class="base-grid lists">
		<h3 class="text-center">Upcoming Events</h3>

		<Events limit upcoming events={data.upcomingEvents} />
	</section>
{/if}

<section class="base-grid lists">
	<h3 class="text-center">Latest Events</h3>

	<Events limit events={data.latestEvents} />

	<a href="/events" class="text-center">View all of our past events</a>
</section>

<style>
	.gradient-text {
		@apply bg-clip-text text-transparent box-decoration-clone bg-gradient-to-r from-primary-500 dark:from-primary-200 to-secondary-700 dark:to-secondary-500;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
