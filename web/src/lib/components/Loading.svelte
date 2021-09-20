<style>
.footer {
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0;
	width: 100%;
	color: white;
	text-align: center;
	margin: 20px;
}
.shim-blue {
	position: relative;
	overflow: hidden;
	background-color: rgba(17, 24, 39);
}
.shim-blue::after {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transform: translateX(-100%);
	background-image: linear-gradient(
		90deg,
		rgba(93, 107, 255, 1) 0,
		rgba(93, 107, 255, 0.9) 50%,
		rgba(93, 107, 255, 0.8) 100%
	);
	animation: shimmer 3s ease-out infinite;
	content: "";
}

@keyframes shimmer {
	100% {
		transform: translateX(0%);
		opacity: 0;
	}
}
</style>

<svelte:head>
	<title>Hydralite | Loading</title>
	<link rel="shortcut icon" href="/logo/logo.svg" />
</svelte:head>
<div
	class="bg-white h-screen w-screen dark:bg-acrylic-70 flex items-center justify-center absolute flex-col dark:text-white text-black select-none">
	<img
		src="/logo/logo.svg"
		alt="Hydralite logo"
		width="8%"
		class="motion-safe:animate-pulse" />
	<div class="relative w-72 bg-transparent rounded mt-9">
		<div style="width: 100%" class="absolute top-0 h-2 rounded shim-blue">
		</div>
	</div>
	<!-- <div class="footer">
		<h1 class="text-3xl font-montserrat font-extrabold">HYDRALITE</h1>
	</div> -->
</div>
