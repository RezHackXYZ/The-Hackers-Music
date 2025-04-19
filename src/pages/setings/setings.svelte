<script>
	import { DefaultSongs } from "../home/js/logic.js";

	let songs = "";

	songs = localStorage.getItem("songs") || JSON.stringify(DefaultSongs);
</script>

<div id="root">
	<div id="stuff">
		<h1>Add your youtube vid ids for the songs here!</h1>
		<p>
			We use YouTube to play the songs and retrieve the image from the
			thumbnail<br /> and the song name from the video title using the YouTube
			video ID.
		</p>
		<br />

		<textarea
			name="Songs"
			id="songs"
			bind:value={songs}
			on:input={() => {
				localStorage.setItem("songs", songs);
			}}
		></textarea>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}

	#stuff {
		padding: 20px;
		backdrop-filter: blur(10px);
		border-radius: 20px;
		border: 2px solid white;
	}

	h1 {
		margin: 0;
	}

	p {
		margin: 0;
		margin-bottom: 5px;
		color: #5e5e5e;
	}

	#songs {
		width: 100%;
		height: 200px;
		resize: vertical;
		background-color: black;
		color: white;
	}
</style>
