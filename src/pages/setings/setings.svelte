<script module>
	import { DefaultSongs } from "../home/js/logic.js";

	import EditPopup from "./editPopup.svelte";

	let songs = JSON.parse(localStorage.getItem("songs")) || DefaultSongs;

	let currentPlaylistEditing =  $state({value: songs[0].Name});
	let CurrentPlaylistNo = $state({value: 0});

	let typeofEdit = "playlist";
	let value = 0;

	function EditProses(type) {
		if (type == "playlist") {
			typeofEdit = "playlist";
			value = CurrentPlaylistNo.value;
			document.getElementById("EditPopupDiv").style.display = "grid";
		}
	}

	export function EditDone(changetype, changetoo, whatchange) {
		document.getElementById("EditPopupDiv").style.display = "none";
		if (changetype == "na") {
			return;
		} else if (changetype == "playlistRename") {
			songs[changetoo].Name = whatchange;
			currentPlaylistEditing.value = whatchange;
			localStorage.setItem("songs", JSON.stringify(songs));
			window.location.reload();
		}
	}
</script>

<div id="root">
	<div id="stuff">
		<h1>Edit the songs you want here!</h1>
		<p>
			We use YouTube to play the songs and retrieve the image from the
			thumbnail. while give the customizibility of the name to the user!
		</p>
		<br />
		<div id="edit">
			<div id="editstuff">
				<div id="playlists">
					<h3>PLAYLISTS</h3>
					{#each songs as song, index}
						<button
							onclick={() => {
								currentPlaylistEditing.value = song.Name;
								CurrentPlaylistNo.value = index;
							}}
						>
							<h3>{song.Name}</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#e3e3e3"
								><path
									d="m576-192-51-51 129-129H240v-444h72v372h342L525-573l51-51 216 216-216 216Z"
								/></svg
							></button
						>
					{/each}
					<button>+</button>
				</div>
				<hr />
				<div id="songs">
					<h3>
						Songs In Playlist "<button
							onclick={() => {
								EditProses("playlist");
							}}
							class="currentPlaylist"
						>
							{currentPlaylistEditing.value}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#e3e3e3"
								><path
									d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
								/></svg
							></button
						>"
					</h3>
					{#each songs[CurrentPlaylistNo.value].songs as song}
						<button
							><img
								src="https://img.youtube.com/vi/{song.id}/maxresdefault.jpg"
								alt="music cover"
								class="editIMG"
							/>
							<h3>{song.name}</h3>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#e3e3e3"
								><path
									d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
								/></svg
							></button
						>
					{/each} <button>+</button>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="EditPopupDiv">
	<EditPopup type={typeofEdit} {value} />
</div>

<style>
	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}

	.editIMG {
		height: 20px;
		width: 20px;
		border-radius: 5px;
		border: 2px solid #292929;
		object-fit: cover;
		object-position: center;
	}

	#editstuff {
		display: flex;
		gap: 20px;
	}

	#stuff {
		padding: 20px;
		backdrop-filter: blur(10px);
		border-radius: 20px;
		max-width: 600px;
		border: 2px solid white;
	}

	#playlists {
		display: flex;
		flex-direction: column;
	}

	#songs {
		display: flex;
		flex-direction: column;
	}

	button {
		backdrop-filter: blur(10px);
		background: none;
		border: 1px solid white;
		margin: 5px;
		border-radius: 5px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		cursor: pointer;
	}

	.currentPlaylist {
		margin: 0;
		display: inline-flex;
	}

	h1,
	h3 {
		margin: 0;
	}

	#edit {
		display: flex;
		justify-content: center;
	}

	p {
		margin: 0;
		margin-bottom: 5px;
		color: #5e5e5e;
	}

	#EditPopupDiv {
		background-color: #000000ad;
		height: 100%;
		width: 100%;
		backdrop-filter: blur(2px);
		position: absolute;
		z-index: 99;
		display: none;
		place-items: center;
	}
</style>
