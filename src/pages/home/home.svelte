<script>
	import List from "./list/list.svelte";
	import Player from "./player/Player.svelte";
</script>

<div id="root"><Player /><List /></div>

<style>

	#root {
		height: 100%;
		align-items: center;
		justify-content: center;
		gap:5px;
		display: flex;
		margin: 0;
	}
</style>
