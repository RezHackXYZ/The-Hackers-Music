<script>
	import { search } from "../js/redirect-logic.js";

	let googleSearchKey = localStorage.getItem("googleSearchKey") || "";
	let geminiApiKey = localStorage.getItem("geminiApiKey") || "";

	let input = "";

	function handleKeyPress(event = KeyboardEvent) {
		if (event.key === "Enter" && input.trim() !== "") {
			search(input);
		}
	}
</script>

<div id="root">
	{#if !googleSearchKey || !geminiApiKey}
		<div id="SetApiKeys">
			<h2>Please set your API keys first</h2>
			<p>Go to settings to configure them</p>
		</div>
	{:else}
		<div id="search">
			<img
				src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fbc262eba4225e96054abd34bc8fde3ff8e3c937_group_2.svg"
				alt="logo"
				id="logo"
			/>
			<!-- svelte-ignore a11y_autofocus -->
			<input
				autofocus
				autocomplete="off"
				id="input"
				bind:value={input}
				on:keypress={handleKeyPress}
			/>
		</div>
	{/if}
</div>

<style>
	:root {
		font-family: "JetBrains Mono", monospace;
		font-optical-sizing: auto;
		font-weight: 150;
		font-style: normal;
	}

	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}
	#SetApiKeys {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#SetApiKeys h2 {
		margin: 0;
	}
	#SetApiKeys p {
		margin: 0;
	}

	#search {
		display: flex;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		padding: 5px;
		width: 60%;
	}
	#logo {
		width: 55px;
		margin-right: 10px;
		margin-left: 5px;
	}
	#input {
		background-color: black;
		border: none;
		padding: 5px;
		font-size: 40px;
		color: white;
		width: 100%;
	}

	#input:focus {
		outline: none;
	}
</style>
