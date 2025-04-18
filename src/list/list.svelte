<script>
	import Item from "./item.svelte";

	import { songs } from "../js/logic.js";
</script>

<div id="root">
	<div id="items">
		{#each songs as song}
			<Item name={song.Name} id={song.YoutubeVidId} />
		{/each}
	</div>
</div>

<style>
	#root {
		height: 80%;
		border: 10px solid rgb(46, 46, 46);
		width: 25%;
		border-radius: 20px;
	}
</style>
