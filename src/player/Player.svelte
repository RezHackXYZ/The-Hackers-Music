<script>
	import { CurrentSong } from "../js/data.svelte.js";
	import { PauseOrPlay } from "../js/logic.js";
</script>

<div id="player" style="display:none;"></div>

<div id="root">
	{#if CurrentSong.id != "na"}
		<div id="holder">
			<img src="https://img.youtube.com/vi/{CurrentSong.id}/maxresdefault.jpg" alt="music cover" id="img" />
			<h1 id="nameofsong">{CurrentSong.name}</h1>
		</div>
		<div id="controlls">
			<button aria-label="play song" id="play" on:click={PauseOrPlay}>
				{#if CurrentSong.Playing == false}
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
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e3e3e3"
						><path
							d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"
						/></svg
					>
				{/if}
			</button>
		</div>
	{:else}
		Select a song <br />➡
	{/if}

	<div id="player"></div>
</div>

<style>
	#root {
		height: 80%;
		border: 10px solid rgb(46, 46, 46);
		width: 50%;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#holder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 400px;
	}

	#img {
		height: 400px;
		width: 400px;
		border-radius: 5px;
		border: 10px solid #292929;
		object-fit: cover;
		object-position: center;
	}

	#nameofsong {
		position: absolute;
		background-color: #131313a1;
		border: 5px solid #292929f8;
		width: 600px;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
		backdrop-filter: blur(15px);
	}

	#controlls {
		background-color: #292929;
		width: 600px;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
		margin: 30px;
	}

	#play {
		border-radius: 100%;
		height: 50px;
		width: 50px;
		border: 2px solid #292929;
		background-color: #131313;
		cursor: pointer;
		transition: all 0.2s;
	}

	#play:hover {
		transform: scale(1.1);
	}
</style>
