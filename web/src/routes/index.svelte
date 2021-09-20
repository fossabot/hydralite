<script context="module" lang="ts">
export const prerender = true;
</script>

<script lang="ts">
import type { User } from "$lib/types";
import { getContext } from "svelte";
import type { Writable } from "svelte/store";
import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";
import ProtectedRoute from "$lib/components/Home/ProtectedRoute.svelte";
const user: Writable<User> = getContext("Auth");
</script>

<ProtectedRoute>
	<Skeleton />
</ProtectedRoute>
