<!-- This code is from (could not add it because of some issue while running) -->
<!-- https://github.com/MelihAltintas/svelte-typed-js/blob/master/src/components/SvelteTypedJs.svelte -->
<span class="typed-element " bind:this={typedElement}>
    <slot></slot>
</span>

<script>
  import Typed from 'typed.js'
  
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  let typedObj = null;
  let typedElement = null;
  function throwError(message) {
      throw new TypeError(message)
  }
  function initTypedJS() {
      
      const $typed = typedElement.querySelector('.typing')
      if ($$slots.default == undefined) {
          throwError(`Just one child element allowed inside  component.`)
      } else if ($$slots.default == true) {
          typedObj = new Typed($typed, $$props)
      }
  }
  onMount(() => {initTypedJS()});
//   onDestroy(() => {typedObj.destroy()});
</script>

<style>
  :global(.typed-element .typed-cursor) {
      opacity: 1;
      color: #5D6BFF;
      animation: typedjsBlink 0.7s infinite;
  }
  @keyframes typedjsBlink {
      50% {
          opacity: 0;
      }
  }
</style>
