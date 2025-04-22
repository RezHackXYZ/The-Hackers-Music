<script module>
	import { DefaultSongs } from "../home/js/logic.js";
	let Firstsongs = JSON.parse(localStorage.getItem("songs")) || DefaultSongs;
	export let songs = $state({ value: Firstsongs });
	export let currentPlaylistEditing = $state({ value: songs.value[0].Name });
	export let CurrentPlaylistNo = $state({ value: 0 });
	let EditType = $state({ value: "na" });
	export let SecectedSongForEdit = $state({ value: 0 });

	import EditPlaylist from "./editPopups/EditPlaylist.svelte";
	import NewSong from "./editPopups/NewSong.svelte";
	import NewPlaylist from "./editPopups/NewPlaylist.svelte";
	import EditSong from "./editPopups/EditSong.svelte";

	function EditPlaylistButton() {
		document.getElementById("EditPopupDiv").style.display = "grid";
		EditType.value = "Playlist";
	}

	export function DonePlaylistEdit(type, change) {
		document.getElementById("EditPopupDiv").style.display = "none";
		EditType.value = "na";

		if (type == "rename") {
			currentPlaylistEditing.value = change;
			songs.value[CurrentPlaylistNo.value].Name = change;
			localStorage.setItem("songs", JSON.stringify(songs.value));
		} else if (type == "delete") {
			songs.value.splice(CurrentPlaylistNo.value, 1);
			localStorage.setItem("songs", JSON.stringify(songs.value));
			CurrentPlaylistNo.value = 0;
			currentPlaylistEditing.value = songs.value[0].Name;
		}
	}

	function newSongButton() {
		document.getElementById("EditPopupDiv").style.display = "grid";
		EditType.value = "NewSong";
	}

	export function DoneNewSong(name, id) {
		document.getElementById("EditPopupDiv").style.display = "none";
		EditType.value = "na";
		if (id != "na") {
			songs.value[CurrentPlaylistNo.value].songs.push({
				name: name,
				id: id,
			});
			localStorage.setItem("songs", JSON.stringify(songs.value));
		}
	}

	function newPlaylistButton() {
		document.getElementById("EditPopupDiv").style.display = "grid";
		EditType.value = "NewPlaylist";
	}

	export function DoneNewPlaylist(name) {
		document.getElementById("EditPopupDiv").style.display = "none";
		EditType.value = "na";
		if (name != "") {
			songs.value.push({
				Name: name,
				songs: [],
			});
			localStorage.setItem("songs", JSON.stringify(songs.value));
		}
		window.location.reload();
	}

	function EditSongButton(i) {
		document.getElementById("EditPopupDiv").style.display = "grid";
		EditType.value = "EditSong";
		SecectedSongForEdit.value = i;
	}

	export function DoneSongEdit(type, change) {
		document.getElementById("EditPopupDiv").style.display = "none";
		EditType.value = "na";

		if (type == "edit") {
			songs.value[CurrentPlaylistNo.value].songs[
				SecectedSongForEdit.value
			].name = change.name;
			songs.value[CurrentPlaylistNo.value].songs[
				SecectedSongForEdit.value
			].id = change.id;
			localStorage.setItem("songs", JSON.stringify(songs.value));
			window.location.reload();
		} else if (type == "delete") {
			songs.value[CurrentPlaylistNo.value].songs.splice(
				SecectedSongForEdit.value,
				1
			);
			localStorage.setItem("songs", JSON.stringify(songs.value));
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
					{#each songs.value as song, index}
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
					<button
						onclick={() => {
							newPlaylistButton();
						}}>+</button
					>
				</div>
				<hr />
				<div id="songs">
					<h3>
						Songs In Playlist "<button
							onclick={() => {
								EditPlaylistButton();
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
					{#each songs.value[CurrentPlaylistNo.value].songs as song, i}
						<button
							onclick={() => {
								EditSongButton(i);
							}}
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
					{/each}
					<button
						onclick={() => {
							newSongButton();
						}}>+</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="EditPopupDiv" id="EditPopupDiv">
	{#if EditType.value == "Playlist"}
		<EditPlaylist />
	{:else if EditType.value == "NewSong"}
		<NewSong />
	{:else if EditType.value == "NewPlaylist"}
		<NewPlaylist />
	{:else if EditType.value == "na"}
		<p>Nothing to edit</p>
	{:else if EditType.value == "EditSong"}
		<EditSong />
	{:else}
		<p>Nothing to edit</p>
	{/if}
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

	.EditPopupDiv {
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
