<script>
	import { whatsthequery } from "../js/redirect-logic.js";
	import { onMount } from "svelte";

	onMount(() => {
		const handleKeydown = (event) => {
			if (event.key === "Escape") {
				window.location.href = "#/";
			}
		};
		window.addEventListener("keydown", handleKeydown);
		return () => window.removeEventListener("keydown", handleKeydown);
	});

	let geminiApiKey = localStorage.getItem("geminiApiKey") || "";
	let input = whatsthequery();

	import { GoogleGenAI } from "@google/genai";

	const ai = new GoogleGenAI({
		apiKey: localStorage.getItem("geminiApiKey"),
	});
	export async function search(query) {
		const response = await ai.models.generateContent({
			model: "gemini-2.0-flash-lite",
			contents: `
The users question is: "${query}".

`,
		});
	}
</script>

<div id="root">
	<div id="msgs"></div>
	<input autofocus autocomplete="off" id="input" bind:value={input} />
</div>

<style>
	:root {
		font-family: "JetBrains Mono", monospace;
		font-optical-sizing: auto;
		font-weight: 150;
		font-style: normal;
	}

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	#msgs {
		display: flex;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		padding: 5px;
		width: 60%;
		margin: 20px;
		height: 80%;
	}

	#input {
		background-color: black;
		border: none;
		font-size: 40px;
		color: white;
		border-radius: 10px;
		border: 1px solid white;
		padding: 5px;
		width: 60%;
		margin: 10px;
	}

	#input:focus {
		outline: none;
	}
</style>
