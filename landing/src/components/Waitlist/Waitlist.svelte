<script context="module" lang="ts">
	import FireStore from "../../firebase"
	import {notifications} from "../Toast/notifs"
	import Toast from "../Toast/Toast.svelte"
	let email = '';
	let firestoreManager = new FireStore()
	const submit = (e) => {
		firestoreManager.validateEmail(email).then((status) => {
			console.log(status)
      if (status == "Success") {
        firestoreManager.setEmail(email);
        notifications.success(status, 3000)
      } else {
        notifications.danger(status, 3000)
      }
    });

		console.log(email)
	};
</script>
<div class="flex w-screen items-center justify-center">
<div
	class="h-[50vh] w-[90vw] md:w-[75vw] lg:w-[75vw] bg-gray-200  mt-16 rounded-3xl grid grid-cols-3 gap-1"
>
<Toast />
	<div class="w-full h-full grid grid-rows-3 col-span-3 gap-3 p-4 sm:col-span-3 2xl:col-span-2" id="waitlist">
		<div class="grid row-span-3 2xl:row-span-2 md:row-span-3">
			<div
				class="w-full h-full bg-white rounded-2xl drop-shadow-2xl flex items-center flex-col bg p-7 "
			>
				<div class="flex items-center flex-col">
					<h1 class="text-2xl font-bold font-montserrat">
						Join the <span class="text-dark-color-accent font-extrabold"> Waitlist!</span>
					</h1>
				</div>
				<div class="flex w-full h-full items-center justify-center flex-col">
					<h5 class="text-center font-bold font-montserrat hidden lg:block 2xl:block">
						We promise never to spam you!
					</h5>
					<br />
					<div
						class="grid grid-cols-4 w-full h-[6vh] bg-acrylic-20 p-1 rounded-xl sm:h-[7vh] lg:h-[7vh] xl:h-[7vh] 2xl:h-[5vh]"
					>
						<input
							bind:value={email}
							type="text"
							name="Email"
							autocomplete="off"
							placeholder="email"
							class="bg-transparent col-span-3 focus:outline-none text-black ml-4 "
						/>
						<button
						on:click={submit}
							class="col-span-1 flex items-center justify-center bg-dark-color-accent rounded-xl text-white font-montserrat"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
		<div
			class="w-full h-full bg-white rounded-xl drop-shadow-2xl p-5 hidden items-center flex-col justify-around 2xl:flex"
		>
			<h1 class="text-3xl font-bold font-montserrat">
				Have <span class="text-dark-color-accent"> queries?</span>
			</h1>
			<h6 class="text-lg font-semibold font-montserrat">Email us at team@hydralite.io</h6>
		</div>
	</div>
	<div class="w-full h-full hidden grid-rows-3 gap-3 py-4 pr-4 2xl:grid">
		<a href="https://discord.gg/xkq5RT3Mvn" target="_blank" class="w-full h-full">
			<div
				class="w-full h-full bg-white rounded-2xl drop-shadow-2xl flex flex-col items-center justify-around"
			>
				<h1 class="text-2xl font-montserrat font-bold">Join our discord server</h1>
				<button
					class="bg-dark-color-accent pl-7 py-2 rounded-xl font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3"
					><img src="/assets/discord.svg" width="10%" height="10%" alt="Discord logo" />Take me
					there!</button
				>
			</div>
		</a>
		<a href="https://twitter.com/hydraliteio" target="_blank" class="w-full h-full">
			<div
				class="w-full h-full bg-white rounded-2xl drop-shadow-2xl flex flex-col items-center justify-around"
			>
				<h1 class="text-2xl font-montserrat font-bold">Follow us on twitter</h1>
				<button
					class="bg-dark-color-accent pl-7 py-2 rounded-xl font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3"
					><img src="/assets/twitter.svg" width="10%" height="10%" alt="Discord logo" />Follow
					@hydraliteio
				</button>
			</div>
		</a>
		<a href="https://github.com/hydralite">
			<div
				class="w-full h-full bg-white rounded-2xl drop-shadow-2xl flex flex-col items-center justify-around"
			>
				<h1 class="text-2xl font-montserrat font-bold">Checkout our GitHub</h1>
				<button
					class="bg-dark-color-accent text-sm py-2 rounded-xl px-9 font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3"
					><img src="/assets/github.svg" width="20%" height="20%" alt="Discord logo" />GitHub
				</button>
			</div></a
		>
	</div>
</div>
</div>