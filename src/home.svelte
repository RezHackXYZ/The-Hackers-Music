<script>
	import List from "./list/list.svelte";
	import Player from "./player/Player.svelte";
</script>

<div id="root"><Player /><List /></div>

<style>
	#root {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin: 0;
	}
</style>
