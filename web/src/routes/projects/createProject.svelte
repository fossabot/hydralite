<script lang="ts">
import ProtectedRoute from "$lib/components/Home/ProtectedRoute.svelte";
import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";
import Tabs from "$lib/components/createProject/Tabs.svelte";
import { writable } from "svelte/store";
import { setContext } from "svelte";
import Provider from "$lib/components/createProject/Provider.svelte";
import Repo from "$lib/components/createProject/Repo.svelte";
import Details from "$lib/components/createProject/Details.svelte";
let tab = writable("provider");
setContext("Tabs", tab);
</script>

<ProtectedRoute>
	<Skeleton>
		<div
			class="w-screen h-[calc(100vh-50px)] flex items-center mt-5 justify-start flex-col gap-8">
			<h1 class="text-3xl font-medium text-black dark:text-white">
				Create a new <span class="text-dark-color-accent font-extrabold"
					>project</span>
			</h1>
			<Tabs />
			{#if $tab == "provider"}
				<Provider />
			{:else if $tab == "repo"}
				<Repo />
			{:else if $tab == "details"}
				<Details />
			{:else}
				<h1>An unexpected error occured</h1>
			{/if}
		</div>
	</Skeleton>
</ProtectedRoute>
