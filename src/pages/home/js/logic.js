import { CurrentSong } from "./data.svelte.js";
import DefaultSong from "./data.json";
export let DefaultSongs = DefaultSong;
let data = localStorage.getItem("songs")
	? JSON.parse(localStorage.getItem("songs"))
	: DefaultSongs;
export let songs = data;
CurrentSong.playlistName = songs[0].Name;

let player;

export async function getYouTubeTitle(id) {
	return "abc";
	/*try {
		const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
		const response = await fetch(url);
		if (!response.ok) throw new Error("Invalid video or unavailable");
		const data = await response.json();
		return data.title;
	} catch (error) {
		console.error("Error fetching title:", error);
		return null;
	}*/
}

let i = 0;

function NextSong() {
	for (i = 0; i < songs[CurrentSong.PlaylistNo].songs.length; i++) {
		if (songs[CurrentSong.PlaylistNo].songs[i].id == CurrentSong.id) {
			if (i == songs[CurrentSong.PlaylistNo].songs.length - 1) {
				PlaySongFromList(
					songs[CurrentSong.PlaylistNo].songs[0].id,
					songs[CurrentSong.PlaylistNo].songs[0].name
				);
			} else {
				PlaySongFromList(
					songs[CurrentSong.PlaylistNo].songs[i + 1].id,
					songs[CurrentSong.PlaylistNo].songs[i + 1].name
				);
			}
			break;
		}
	}
}

function playsong(id) {
	player.loadVideoById(id);
	player.playVideo();
}
// @ts-ignore
if (!window.YT) {
	const tag = document.createElement("script");
	tag.src = "https://www.youtube.com/iframe_api";
	document.body.appendChild(tag);
}

// @ts-ignore
window.onYouTubeIframeAPIReady = () => {
	// @ts-ignore
	player = new YT.Player("player", {
		videoId: "",
		playerVars: {
			autoplay: 0,
			controls: 0,
		},
		events: {
			onReady: (event) => {
				event.target.playVideo();
			},
			onStateChange: onPlayerStateChange,
		},
	});
};

export function PlaySongFromList(id, name) {
	CurrentSong.id = id;
	CurrentSong.name = name;
	/*getYouTubeTitle(id).then((title) => {
		CurrentSong.name = title;
	});*/
	CurrentSong.Playing = true;
	playsong(id);
}

function onPlayerStateChange(event) {
	// @ts-ignore
	if (event.data === YT.PlayerState.ENDED) {
		NextSong();
	}
}

export function PauseOrPlay() {
	if (CurrentSong.Playing) {
		player.pauseVideo();
		CurrentSong.Playing = false;
	} else {
		player.playVideo();
		CurrentSong.Playing = true;
	}
}

export function ChangePlaylist(playlist) {
	for (i = 0; i < songs.length; i++) {
		if (songs[i].Name == playlist) {
			CurrentSong.playlistName = songs[i].Name;
			CurrentSong.PlaylistNo = i;
			player.pauseVideo();
			CurrentSong.Playing = true;
			CurrentSong.id = "na";
			break;
		}
	}
}
