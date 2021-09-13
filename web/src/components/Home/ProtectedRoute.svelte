<script lang="ts">
import { SendReq } from "$lib/api";
import type { User } from "$lib/types";
import Loading from "../Loading.svelte";
import { getContext, onMount } from "svelte";
import type { Writable } from "svelte/store";
import Toaster from "../../components/Toast.svelte";
import { fly } from "svelte/transition";
import { notifications } from "../notifications";
import Login from "../Login/Login.svelte";
const AuthStore: Writable<User> = getContext("Auth");
const loggedIn: Writable<boolean> = getContext("LoggedIn");
let gotServerResp = false;
onMount(() => {
	let accessToken = localStorage.getItem("accessToken");
	if (accessToken != null) {
		SendReq("http://localhost:8000/api/auth/getUser", "GET", {
			Authorization: `bearer ${accessToken}`,
		}).then((val) => {
			gotServerResp = true
			if (val.error) {
				loggedIn.set(false);
				notifications.danger(
					"Error authenticating user, logging out",
					3000
				);
				localStorage.removeItem("accessToken");
			} else {
				if (val === "") {
					notifications.danger(
						"Error authenticating user, logging out",
						3000
					);
					console.log("logging out");
					localStorage.removeItem("accessToken");
				}
				let {
					_id: { $oid },
					profile: { name, email, profilepic },
				} = val;
				let u: User = {
					email: email,
					id: $oid,
					name: name,
					profilePicture: profilepic,
				};
				AuthStore.set(u);
				loggedIn.set(true);
			}
		});
	} else {
		gotServerResp = true
		loggedIn.set(false);
	}
});
</script>

<Toaster />

<svelte:head>
	<title>Hydralite</title>
	<link rel="shortcut icon" href="/logo/logo.svg" />
</svelte:head>
{#if gotServerResp == true}
	{#if $loggedIn == true}
		{#if $AuthStore == null}
			<Loading />
		{:else}
			<div
				in:fly="{{ y: 50, duration: 250, delay: 300 }}"
				out:fly="{{ y: -50, duration: 250 }}">
				<slot />
			</div>
		{/if}
	{:else}
		<Login />
	{/if}
{:else}
	<Loading />
{/if}