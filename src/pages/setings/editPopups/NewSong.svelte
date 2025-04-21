<script>
	import { DoneNewSong, currentPlaylistEditing } from "../setings.svelte";

	let Name = "";
	let id = "";
</script>

<div id="root">
	<h1>New SONG!!!</h1>

	<p>In Playlist: {currentPlaylistEditing.value}</p>
	<p>
		Name Of the song: <input
			type="text"
			bind:value={Name}
			id="name"
			placeholder="Enter the name"
		/>
	</p>
	<p>
		Id for the song: <input
			type="text"
			bind:value={id}
			id="name"
			placeholder="Enter The id"
		/>
	</p>

	<button
		id="doit"
		onclick={() => {
			DoneNewSong(Name, id);
			console.log(Name, id);
		}}>Add It!</button
	>

	<hr />
	<button
		onclick={() => {
			DoneNewSong("", "na");
		}}>😔 No new song? 😔</button
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

	#doit {
		border: 3px solid #00ff00;
	}
</style>
