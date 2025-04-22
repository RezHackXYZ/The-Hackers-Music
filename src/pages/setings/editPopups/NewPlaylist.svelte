<script>
	import { DoneNewPlaylist } from "../setings.svelte";

	let Name = "";
</script>

<div id="root">
	<h1>New Playlist!!!</h1>
	<p>
		Name Of new playlist!: <input
			type="text"
			bind:value={Name}
			id="name"
			placeholder="Enter the name of the playlist!"
		/>
	</p>

	<button
		id="doit"
		onclick={() => {
			DoneNewPlaylist(Name);
		}}>Add It!</button
	>

	<hr />
	<button
		onclick={() => {
			DoneNewPlaylist("");
		}}>😔 No new playlist? 😔</button
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
