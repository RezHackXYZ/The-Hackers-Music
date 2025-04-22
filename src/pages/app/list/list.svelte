<script>
	import Item from "./item.svelte";
	import Playlist from "./playlist.svelte";

	import { songs } from "../js/logic.js";
	import {CurrentSong} from "../js/data.svelte.js";
</script>

<div id="root">
	<p>Playlists</p>
	<div id="playlists">
		{#each songs as song}
			<Playlist name={song.Name} />
		{/each}
	</div>
	<hr />
	<p>Songs In The {CurrentSong.playlistName} Playlist</p>
	<div id="items">
		{#each songs[CurrentSong.PlaylistNo].songs as song}
			<Item id={song.id} name={song.name} />
		{/each}
	</div>
</div>

<style>
	hr {
		width: 90%;
	}

	p {
		margin: 0;
		text-align: center;
	}

	#playlists {
		display: flex;
		overflow-y: auto;
	}

	#root {
		height: 80%;
		border: 10px solid rgb(46, 46, 46);
		width: 25%;
		border-radius: 20px;
		backdrop-filter: blur(10px);
		overflow-y: auto;
	}

	#items {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
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
