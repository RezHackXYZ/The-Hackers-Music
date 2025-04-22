<script>
	import {
		DoneSongEdit,
		SecectedSongForEdit,
		songs,
		CurrentPlaylistNo,
	} from "../setings.svelte";

	let Name =
		songs.value[CurrentPlaylistNo.value].songs[SecectedSongForEdit.value]
			.name;
	let id =
		songs.value[CurrentPlaylistNo.value].songs[SecectedSongForEdit.value]
			.id;

	let box2 = false;
	let box1 = false;
</script>

<div id="root">
	<h1>Edit Song Details?</h1>

	<p>
		Name: <input
			type="text"
			bind:value={Name}
			id="name"
			placeholder="Enter New Name"
		/>
	</p>
	<p>
		Name: <input
			type="text"
			bind:value={id}
			id="name"
			placeholder="Enter New Name"
		/>
	</p>

	<button
		id="doit"
		onclick={() => {
			DoneSongEdit("edit", {
				name: Name,
				id: id,
			});
		}}>Edit It!</button
	>

	<hr />

	<h1>Delete Song?</h1>
	<input type="checkbox" id="delete" bind:checked={box1} />
	<label for="delete">Im Sure</label>
	<input type="checkbox" id="delete2" bind:checked={box2} />
	<label for="delete2">Im Double Sure</label>
	<br />
	<button
		id="Cancle"
		onclick={() => {
			if (!box1) {
				alert("Be sure first!");
			} else if (!box2) {
				alert("Be double sure!");
			} else {
				DoneSongEdit("delete", "");
			}
		}}>Delete Song?</button
	>
	<hr />
	<button
		onclick={() => {
			DoneSongEdit("na", "");
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
