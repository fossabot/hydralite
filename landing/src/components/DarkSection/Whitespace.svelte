<script>
	export let img = '/assets/integration.svg';
</script>

<div class="w-[25%] h-full flex flex-col items-center justify-around">
	<img class="md:w-[5em] lg:w-[1em] xl:w-[3em] 2xl:w-[5em]" width="50em" src={img} alt={img} />
	<slot />
</div>
