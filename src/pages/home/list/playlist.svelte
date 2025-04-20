<script>
	import { ChangePlaylist, getYouTubeTitle } from "../js/logic.js";
	import { CurrentSong } from "../js/data.svelte.js";

	let props = $props();
	let title = $state({ val: "" });

	// Function to fetch title and update state
	async function GetTitle(id) {
		title.val = await getYouTubeTitle(id);
	}

	GetTitle(props.id);
</script>

{#if CurrentSong.playlistName == props.name}
	<div id="root" class="current">
		<div id="info">
			<h1 id="name">
				{props.name}
			</h1>
		</div>
	</div>
{:else}
	<div id="root" class="Notcurrent">
		<h1 id="name">
			{props.name}
		</h1>
		<button
			onclick={() => {
				ChangePlaylist(props.name);
			}}
			aria-label="play song"
			id="play"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="30px"
				viewBox="0 -960 960 960"
				width="30px"
				fill="#e3e3e3"
			>
				<path
					d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"
				/>
			</svg>
		</button>
	</div>
{/if}

<style>
	#root {
		width: fit-content;

		color: #d8d8d8;
		padding: 5px;
		border-radius: 5px;
		margin: 5px;

		display: flex;
	}

	.Notcurrent {
		border: 2px solid #2e2e2e;
	}
	.current {
		border: 2px solid #07c400;
	}

	#info {
		display: flex;
	}

	#name {
		margin: 0;
		align-self: center;
		margin-left: 5px;
		margin-right: 5px;
	}

	#play {
		border-radius: 100%;
		align-self: center;
		height: 45px;
		width: 45px;
		border: 2px solid #292929;
		background-color: #131313;
		transition: all 0.1s;
	}

	#play:hover {
		transform: scale(1.05);
	}
</style>
