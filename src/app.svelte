<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/app/home.svelte";
	import setings from "./pages/setings/setings.svelte";
	import Matrix from "./matrix.svelte";
	import About from "./pages/home/home.svelte";
	let routes = {
		"/app": Home,
		"/setings": setings,
		"/": About,
	};

	import Nav from "./nav.svelte";

	import { injectSpeedInsights } from "@vercel/speed-insights";

	injectSpeedInsights();
</script>

<div id="matrix">
	<Matrix />
</div>
<div id="root">
	<Nav />
	<Router {routes} />
</div>

<style>
	:root {
		background-color: black;
		color: white;
		font-family: "Space Grotesk", sans-serif;
	}

	* {
		font-family: "Space Grotesk", sans-serif;
	}

	#root {
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	#matrix {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
