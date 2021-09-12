<script lang="ts">
	import '../fonts.css';
	import type { User } from '$lib/types';
	import { onMount, setContext } from 'svelte';
	import { Writable, writable } from 'svelte/store';
	import { SendReq } from '$lib/api';
	import Toast from '../components/Toast.svelte';
	import { notifications } from '../components/notifications';

	const user: User | null = null;
	const AuthStore: Writable<User | null> = writable(user);
	setContext('Auth', AuthStore);
	const loggedIn: Writable<boolean> = writable(false);
	setContext('LoggedIn', loggedIn);
	onMount(() => {
		let accessToken = localStorage.getItem('accessToken');
		if (accessToken != null) {
			// accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MzM4NjA5NjUsInVzZXJfaWQiOiI2MTNjYjUyZWU4NmVhZDA2ODVhMDQzM2MifQ.mDnsC_xFy_fZkKjeZmXZhoPKBLVR0dHcYtnBwSB-oog"
			SendReq('http://localhost:8000/api/auth/getUser', 'GET', {
				Authorization: `bearer ${accessToken}`
			}).then((val) => {
				if (val.error) {
					loggedIn.set(false);
					notifications.danger("ABCDEFG idk why this error", 3000)
				} else {
					let u: User = {
						email: '',
						id: '',
						name: '',
						profilePicture: ''
					};
					u.id = val['_id']['$oid'];
					u.name = val['profile']['name'];
					u.email = val['profile']['email'];
					u.profilePicture = val['profile']['profilepic'];
					// AuthStore.set(u);
					loggedIn.set(true);
				}
			});
		} else {
			loggedIn.set(false);
		}
	});
</script>

<Toast />
<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
