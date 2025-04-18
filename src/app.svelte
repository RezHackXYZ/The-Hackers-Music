<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/home/home.svelte";
	import setings from "./pages/setings/setings.svelte";
	let routes = {
		"/": Home,
		"/setings": setings
	};

	import Nav from "./nav.svelte";
</script>

<div id="root">
	<Nav />
	<Router {routes} />
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}

	#root {
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
