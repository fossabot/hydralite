<script lang="ts">
    import { getContext } from "svelte";
import type { User } from "$lib/types";
import type { Writable } from "svelte/store";

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Fa from 'svelte-fa'
const user: Writable<User> = getContext("Auth");
</script>

<div class="w-screen h-screen bg-white dark:bg-dark-bg">
	<div
		class="w-[calc(100vw-24px)] h-[50px] flex items-center justify-between mx-3">
		<h1
			class="font-montserrat font-extrabold text-xl text-black dark:text-white">
			HYDRALITE
		</h1>
		<div class="flex gap-4 font-bold text-xl text-black dark:text-white">
			<span>Discover</span>
			<span>Project</span>
			<span>Project Ideas</span>
		</div>
		<div
			class="flex bg-iris-10 dark:bg-dark-bgMuted1 w-44 h-10 rounded-lg items-center justify-between px-4 gap-2">
			<img
				src="{$user.profilePicture}"
				width="20%"
				class="rounded-xl"
				alt="Profile pic" />
			<span class="text-sm text-black dark:text-white">{$user.name ?? ""}</span>
			<div class="  ">
                <Fa icon={faChevronDown} class="text-black dark:text-white"/>
            </div>
		</div>
	</div>
	<div
		class="w-[50px] h-[calc(100vh-100px)] mt-[20px] flex items-center flex-col">
		<h1>asd</h1>
		<h1>asd</h1>
	</div>
</div>
