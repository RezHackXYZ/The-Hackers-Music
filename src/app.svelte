<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/home/home.svelte";
	import setings from "./pages/setings/setings.svelte";
	import Matrix from "./matrix.svelte";
	import About from "./pages/about/about.svelte";
	let routes = {
		"/": Home,
		"/setings": setings,
		"/about": About,
	};

	import Nav from "./nav.svelte";
</script>

<div id="matrix">
	<!--<Matrix />-->
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
