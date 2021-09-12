<script lang="ts">
import { SendReq } from "$lib/api";
import type { User } from "$lib/types";
import Loading from "../Loading.svelte";
import { getContext, onMount } from "svelte";
import type { Writable } from "svelte/store";

import { fly } from "svelte/transition";
import { notifications } from "../notifications";

const AuthStore: Writable<User> = getContext("Auth");
const loggedIn: Writable<boolean> = getContext("LoggedIn");

onMount(() => {
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken != null) {
    
    SendReq("http://localhost:8000/api/auth/getUser", "GET", {
      Authorization: `bearer ${accessToken}`,
    }).then((val) => {
      if (val.error) {
        loggedIn.set(false);
        notifications.danger("ABCDEFG idk why this error", 3000);
      } else {
        let u: User = {
          email: "",
          id: "",
          name: "",
          profilePicture: "",
        };
        u.id = val["_id"]["$oid"];
        u.name = val["profile"]["name"];
        u.email = val["profile"]["email"];
        u.profilePicture = val["profile"]["profilepic"];
        AuthStore.set(u);
        loggedIn.set(true);
      }
    });
  } else {
    loggedIn.set(false);
  }
});
</script>

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
  <Loading />
{/if}
