<style>
</style>

<script context="module" lang="ts">
import type { User } from "$lib/types";
import Loading from "../components/Loading.svelte";
import { getContext } from "svelte";
import type { Writable } from "svelte/store";
import ProtectedRoute from "../components/Home/ProtectedRoute.svelte";
export const prerender = true;
</script>

<script lang="ts">
const user: Writable<User> = getContext("Auth");
const loggedIn: Writable<boolean> = getContext("LoggedIn");
</script>

<ProtectedRoute>
  <main class="w-screen h-screen">
    <h1 class="font-montserrat font-extrabold text-3xl text-black">
      H- <br />
      H- <br />
      H- <br />
      Hi {$user.name}
    </h1>
  </main>
</ProtectedRoute>
