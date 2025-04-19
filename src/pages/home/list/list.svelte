<script>
	import Item from "./item.svelte";

	import { songs } from "../js/logic.js";
</script>

<div id="root">
	<div id="items">
		{#each songs as song}
			<Item id={song.id} name={song.name} />
		{/each}
	</div>
</div>

<style>
	#root {
		height: 80%;
		border: 10px solid rgb(46, 46, 46);
		width: 25%;
		border-radius: 20px;
		backdrop-filter: blur(10px);
	}

	#items {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #18581e;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #264129;
	}
</style>
