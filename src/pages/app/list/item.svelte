<script>
	import { PlaySongFromList, getYouTubeTitle } from "../js/logic.js";
	import { CurrentSong } from "../js/data.svelte.js";

	let props = $props();
	let title = $state({ val: "" });

	// Function to fetch title and update state
	async function GetTitle(id) {
		title.val = await getYouTubeTitle(id);
	}

	GetTitle(props.id);
</script>

{#if CurrentSong.id == props.id}
	<div id="root" class="current">
		<div id="info">
			<img
				src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
				id="img"
				alt="Music Logo"
			/>
			<h1 id="name">
				<!--
				{title.val.length > 0 ? title.val : "Loading..."}
				-->

				{props.name}
			</h1>
		</div>
	</div>
{:else}
	<div id="root" class="Notcurrent">
		<div id="info">
			<img
				src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
				id="img"
				alt="Music Logo"
			/>
			<h1 id="name">
				<!--
				{title.val.length > 0 ? title.val : "Loading..."}
				-->

				{props.name}
			</h1>
		</div>
		<div>
			<button
				onclick={() => {
					PlaySongFromList(props.id, props.name);
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
	</div>{/if}

<style>
	#root {

		color: #d8d8d8;
		padding: 5px;
		border-radius: 5px;
		margin: 5px;

		display: flex;
		justify-content: space-between;
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

	#img {
		width: 50px;
		height: 50px;
		border-radius: 5px;
		object-fit: cover;
		object-position: center;
	}

	#name {
		margin: 0;
		align-self: center;
		margin-left: 10px;
		font-size: 25px;
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
