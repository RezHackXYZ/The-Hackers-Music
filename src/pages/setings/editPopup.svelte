<script>
	let props = $props();

	import { EditDone } from "./setings.svelte";
	import { DefaultSongs } from "../home/js/logic.js";
	let songs = localStorage.getItem("songs") || DefaultSongs;
</script>

<div id="root">
	<h1>Rename Playlist?</h1>

	<p>From: {songs[props.value].Name}</p>
	<p>
		To: <input
			type="text"
			autofocus
			id="name"
			placeholder="Enter New Name"
		/>
	</p>

	<button id="doit" 
		onclick={
			() => {
				let newName = document.getElementById("name").value;
				if (newName == "") {
					alert("Please enter a name");
					return;
				}
				EditDone("playlistRename", props.value, newName);
			}
		}
	>Rename It!</button>

	<hr />

	<h1>Delete Playlist?</h1>
	<input type="checkbox" id="delete" />
	<label for="delete">Im Sure</label>
	<input type="checkbox" id="delete2" />
	<label for="delete2">Im Double Sure</label>
	<br />
	<button id="Cancle">Delete Playlist</button>
	<hr />
	<button
		onclick={() => {
			EditDone("na");
		}}>Cancle any changes</button
	>
</div>

<style>
	#root {
		border: 2px solid white;
		padding: 20px;
		background-color: #0000005d;
		backdrop-filter: blur(5px);
		border-radius: 20px;
		max-width: 600px;
	}

	h1,
	p {
		margin: 0;
	}

	button {
		backdrop-filter: blur(10px);
		background: none;
		margin: 5px;
		border-radius: 5px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		cursor: pointer;
		display: inline;
	}

	input {
		padding: 5px;
		border-radius: 5px;
		border: 2px solid #292929;
		background-color: #131313;
		color: white;
		display: inline;
	}

	#Cancle {
		border: 3px solid #ff0000;
	}

	#doit {
		border: 3px solid #00ff00;
	}
</style>
