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
		<h1>Google search api key:</h1>
		<p>
			Get it from <a
				target="_blank"
				href="https://developers.google.com/custom-search/v1/overview#api_key"
				>here</a
			>
		</p>
		<input
			autocomplete="off"
			type="password"
			bind:value={googleSearchKey}
		/>

		<h1>Google Ai-Studio/Gemini api key:</h1>
		<p>
			Get it from <a
				target="_blank"
				href="https://aistudio.google.com/apikey">here</a
			>
		</p>

		<input autocomplete="off" type="password" bind:value={geminiApiKey} />

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

	a {
		color: #5e5e5e;
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
		width: 100%;
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
