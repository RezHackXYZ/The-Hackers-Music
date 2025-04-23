<script>
	import List from "./list/list.svelte";
	import Player from "./player/Player.svelte";
</script>

<div id="root">
	<Player />
	<List />
</div>

<style>
	#root {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		gap: 5px;
	}

	@media only screen and (max-width: 800px) {
		#root {
			flex-direction: column;
			overflow: hidden;
		}
	}
</style>
