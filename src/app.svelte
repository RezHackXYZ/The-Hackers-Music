<script>
	import List from "./list/list.svelte";
	import Player from "./player/Player.svelte";
</script>

<div id="root">
	<h1>The Hackers Music - The Ultimate Music Player!</h1>
	<div id="music"><Player /><List /></div>
</div>

<style>
	:root {
		background-color: black;
		color: white;
	}
	h1 {
		text-align: center;
		color: white;
		margin: 0;
		padding-top: 10px;
	}

	#root {
		height: 100%;
		align-items: center;
		justify-content: center;

		display: flex;
		flex-direction: column;
		margin: 0;
	}

	#music {
		flex: 1;
		width: 100%;
		gap: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
