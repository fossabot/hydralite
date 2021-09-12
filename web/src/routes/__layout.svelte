<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts" context="module">
import "../fonts.css";
import type { User } from "$lib/types";
import { setContext } from "svelte";
import { Writable, writable } from "svelte/store";
import Toast from "../components/Toast.svelte";
</script>

<script lang="ts">
const user: User | null = null;

const AuthStore: Writable<User | null> = writable(user);

setContext("Auth", AuthStore);
const loggedIn: Writable<boolean> = writable(false);
setContext("LoggedIn", loggedIn);
</script>

<Toast />
<slot />
