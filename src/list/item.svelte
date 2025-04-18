<script>
	import { PlaySongFromList } from "../js/logic.js";

	let props = $props();
</script>

<div id="root">
	<div id="info">
		<img src="https://img.youtube.com/vi/{props.id}/maxresdefault.jpg" id="img" alt="Music Logo" />
		<h1 id="name">{props.name}</h1>
	</div>
	<div>
		<button
			onclick={() => {
				PlaySongFromList(props.id, props.name, props.image);
			}}
			aria-label="play song"
			id="play"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				height="30px"
				viewBox="0 -960 960 960"
				width="30px"
				fill="#e3e3e3"
				><path
					d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"
				/></svg
			></button
		>
	</div>
</div>

<style>
	#root {
		border: 2px solid #2e2e2e;
		background-color: #131313;
		color: #d8d8d8;
		padding: 5px;
		border-radius: 5px;
		margin: 5px;

		display: flex;
		justify-content: space-between;
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
