<script>
	import { onMount } from "svelte";

	let googleSearchKey = "";
	let geminiApiKey = "";

	onMount(() => {
		googleSearchKey = localStorage.getItem("googleSearchKey") || "";
		geminiApiKey = localStorage.getItem("geminiApiKey") || "";
	});

	function saveKeys() {
		localStorage.setItem("googleSearchKey", googleSearchKey);
		localStorage.setItem("geminiApiKey", geminiApiKey);
	}
</script>

<div id="root">
	<div>
		<h1>Add your youtube vid ids for the songs here!</h1>
		<p>
			We use YouTube to play the songs and retrieve the image from the
			thumbnail<br /> and the song name from the video title using the YouTube
			video ID.
		</p>
		<br />
		<div class="row">
			<input autocomplete="off" /><button
				aria-label="delete"
				class="delete"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="20px"
					viewBox="0 -960 960 960"
					width="20px"
					fill="#BB271A"
					><path
						d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"
					/></svg
				></button
			>
		</div>
		<button id="save" on:click={saveKeys}>Save</button>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}

	h1:nth-of-type(1) {
		margin: 0;
	}

	h1:nth-of-type(2) {
		margin: 0;
		margin-top: 40px;
	}

	p {
		margin: 0;
		margin-bottom: 5px;
		color: #5e5e5e;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	input {
		background-color: black;
		border: none;
		padding: 5px;
		font-size: 20px;
		color: #c2c2c2;

		border-radius: 10px;
		border: 1px solid #a5a5a5;
		padding: 5px;
		width: 140px;
	}

	.delete {
		background-color: #3d1c1c;
		border: 2px solid #bb271a;
		border-radius: 100%;
		height: 33px;
		width: 33px;
		padding: 0;
	}

	#save {
		background-color: rgb(0, 63, 14);
		border: none;
		padding: 5px;
		font-size: 20px;
		color: white;
		border-radius: 10px;
		border: 1px solid white;
		margin: 5px;
		margin-top: 40px;
		width: 100%;
		cursor: pointer;
		transition: all 0.3s;
	}

	#save:hover {
		transform: scale(1.05);
	}
</style>
