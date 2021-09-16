<script>
	import Whitespace from './DarkSection/Whitespace.svelte';
</script>

<div class="h-[80vh] bg-dark-bgMuted2  flex items-center justify-between px-[10vw] relative">
	<div>
		<h2 class="font-bold font-montserrat text-acrylic-20">FAST, INTUITIVE, POWERFUL</h2>
		<h2 class="mt-5 font-extrabold text-3xl font-montserrat text-dark-color-accent">
			PROJECT MANAGEMENT
		</h2>
		<h5 class="mt-5 font-semibold text-acrylic-30">
			Hydralite allows easy, intuitive project<br /> management, it allows brainstorming <br />
			sessions, audio rooms, inbuilt source control, <br />and many more!
		</h5>
	</div>
	<div class="hidden sm:hidden md:hidden lg:text-sm xl:hidden 2xl:inline-flex">
		<div
			class=" z-50 absolute bg-white w-[calc(100%-30%)] h-[25vh] right-[15vw]  bottom-[-15vh] drop-shadow-2xl rounded-xl flex"
		>
			<Whitespace img="/assets/integration.svg">
				<h4 class="text-center font-bold font-montserrat  md:text-xl lg:text-sm text-gray-800">
					Hydralite’s tightly integrated with<br /> your favourite providers! You can <br /> do it all
					through Hydralite.
				</h4>
			</Whitespace>
			<Whitespace img="/assets/git.svg">
				<h4 class="text-center font-bold font-montserrat  md:text-xl lg:text-sm  text-gray-800">
					Integrated with Github,<br /> Bitbucket and Gitlab for seamless codebase management.
				</h4>
			</Whitespace>
			<Whitespace img="/assets/releases.svg">
				<h4 class="text-center font-bold font-montserrat  md:text-xl lg:text-sm  text-gray-800">
					Hydralite allows you<br /> to handle releases<br /> easily using our<br /> integrations.
				</h4>
			</Whitespace>
			<Whitespace img="/assets/community.svg">
				<h4 class="text-center font-bold font-montserrat md:text-xl lg:text-sm text-gray-800 mr-3">
					Build a community around your product.  Update them<br />  about your latest releases
					<br />and features.
				</h4>
			</Whitespace>
		</div>
	</div>
	<img class="hidden lg:inline-flex xl:inline-flex 2xl:inline-flex" src="/assets/Project.svg" alt="" width="50%" height="50%" />
</div>
