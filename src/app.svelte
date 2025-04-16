<script>
	import Home from "./home.svelte";
</script>

<div id="root">
	<Home />
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
	}
</style>
