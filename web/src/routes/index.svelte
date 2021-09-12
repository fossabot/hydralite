<script context="module" lang="ts">
	import type { User } from '$lib/types';
	import Loading from '../components/Loading.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Home from "../components/Home/Home.svelte"
	export const prerender = true;
</script>

<script lang="ts">
	const user: Writable<User> = getContext('Auth');
	const loggedIn: Writable<boolean> = getContext('LoggedIn');
</script>

{#if $loggedIn == true}
	{#if $user == null}
		<Loading></Loading>
	{:else}
		<Home>
			<main class="w-screen h-screen">
				<h1 class="font-montserrat font-extrabold text-3xl text-black">
					{JSON.stringify($user)}
				</h1>
			</main>
		</Home>
	{/if}
{:else}
	<Loading />
{/if}
<style>
</style>
