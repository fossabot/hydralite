<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { startType, getRandomPun } from '../components/SvelteTyped';
	import Footer from '../components/Footer.svelte';
	let wrapper;

	import * as animateScroll from 'svelte-scrollto';
	import Waitlist from '../components/Waitlist/Waitlist.svelte';
	import DescriptionBoxes from '../components/DescriptionBoxes.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		startType(getRandomPun('Deploy'), 0, wrapper);
	});
</script>

<div class=" font-montserrat">
	<div class="fixed z-[10000] w-screen">
		<div
			class="flex items-center h-[10vh] justify-between font-montserrat py-2 px-16 bg-opacity-60 backdrop-blur-xl"
		>
			<img src="/logo/logo.svg" alt="Logo" class="w-14" />
			<button
				class="font-bold text-gray-500"
				on:click={() => {
					animateScroll.scrollTo({ element: '#waitlist', duration: 1000 });
					console.log('as');
				}}
			>
				Join Waitlist
			</button>
		</div>
	</div>
	<div class="overflow-x-hidden">
		<div class="h-screen flex items-center justify-center w-screen flex-col">
			<span class="font-bold text-center text-5xl font-montserrat leading-[1.35]">
				The place for Developers to<br />
				<span class="typity" bind:this={wrapper} />{' '}Software
			</span>
			<h4 class="font-montserrat font-bold mt-6 text-[#656565] text-center">
				Connect with like-minded developers, onboard investors <br /> and seamlessly manage your codebase.
			</h4>
		</div>
		<DescriptionBoxes />
		<Waitlist />
		<Footer />
	</div>
</div>
