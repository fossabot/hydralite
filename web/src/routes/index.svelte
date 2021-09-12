<script context="module" lang="ts">
export const prerender = true;
</script>

<script lang="ts">
import type { User } from "$lib/types";
import { getContext } from "svelte";
import type { Writable } from "svelte/store";
import ProtectedRoute from "../components/Home/ProtectedRoute.svelte";
const user: Writable<User> = getContext("Auth");
</script>

<ProtectedRoute>
	<main class="w-screen h-screen">
		<h1 class="font-montserrat font-extrabold text-3xl text-black">
			H- <br />
			H- <br />
			H- <br />
			Hi {$user.id}
		</h1>
	</main>
</ProtectedRoute>
