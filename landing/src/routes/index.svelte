<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {startType,getRandomPun} from '../components/SvelteTyped';
	import Footer from '../components/Footer.svelte';
	let wrapper;

	import * as animateScroll from "svelte-scrollto";
	import Waitlist from '../components/Waitlist/Waitlist.svelte';
	import DescriptionBoxes from '../components/DescriptionBoxes.svelte';
import { onMount } from 'svelte';
onMount(() => {
	startType(getRandomPun("Discover"), 0, wrapper)
},)
</script>

<div class="overflow-x-hidden font-montserrat">
	<div class="flex items-center justify-between font-montserrat my-4 mx-16">
		<img src="/logo/logo.svg" alt="Logo" class="w-14" />
		<button
			class="font-bold text-gray-500"
			on:click={() => {
				animateScroll.scrollTo({element: "#waitlist", duration: 1000})
				console.log('as')
			}}
		>
			Join Waitlist
		</button>
	</div>
	<div class="h-[calc(100vh-10vh)] flex items-center justify-center w-screen flex-col">
		<span class="font-bold text-center text-5xl font-montserrat" >
			The place for Developers to<br/>
			<span class="typity" bind:this={wrapper}></span>{" "}Software
		</span>
		<h4 class="font-montserrat font-bold mt-6 text-[#656565] text-center">
			Connect with like-minded developers, onboard investors <br /> and seamlessly manage your codebase.
		</h4>
	</div>
	<DescriptionBoxes />
	<Waitlist />
	<Footer />
</div>
