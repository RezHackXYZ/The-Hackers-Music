<script>
	let props = $props();
</script>

<div id="root">
	<div id="info">
		<img src={props.image} id="img" alt="Music Logo" />
		<h1 id="name">{props.name}</h1>
	</div>
	<div>
		<button aria-label="play song" id="play"
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
	}

	#name {
		margin: 0;
		align-self: center;
		margin-left: 10px;
	}

	#play {
        border-radius: 100%;
        height: 50px;
        width: 50px;
        border: 2px solid #292929;
		background-color: #131313;
	}
</style>
