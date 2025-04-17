<script>
	import { CurrentSong} from "../js/logic.js";

</script>

<div id="player" style="display:none;"></div>

<div id="root">
	<div id="holder">
		<img
			src={CurrentSong.img}
			alt="music cover"
			id="img"
		/>
		<h1 id="nameofsong">{CurrentSong.name}</h1>
	</div>
	<div id="controlls">
		<button aria-label="play song" id="back">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#e3e3e3"
				><path
					d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z"
				/></svg
			>
		</button>
		<button aria-label="play song" id="play">
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
		<button aria-label="play song" id="next">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#e3e3e3"
				><path
					d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z"
				/></svg
			>
		</button>
	</div>

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
	}

	#nameofsong {
		position: absolute;
		background-color: #131313e8;
		border: 5px solid #292929f8;
		width: 600px;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
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

	#back,
	#next {
		border-radius: 100%;
		height: 40px;
		width: 40px;
		border: 2px solid #292929;
		background-color: #131313;
		cursor: pointer;
		transition: all 0.2s;
	}
	#back:hover,
	#next:hover {
		transform: scale(1.1);
	}

	#play:hover {
		transform: scale(1.1);
	}
</style>
