import { CurrentSong } from "./data.svelte.js";
import data from "./data.json" assert { type: "json" };
export let songs = data;

let player;

export async function getYouTubeTitle(id) {
	try {
		const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
		const response = await fetch(url);
		if (!response.ok) throw new Error("Invalid video or unavailable");
		const data = await response.json();
		return data.title;
	} catch (error) {
		console.error("Error fetching title:", error);
		return null;
	}
}

let i = 0;


function NextSong() {
	for (i = 0; i < songs.length; i++) {
		if (songs[i] == CurrentSong.id) {
			if (i == songs.length - 1) {
				PlaySongFromList(songs[0]);
			} else {
				PlaySongFromList(songs[i + 1]);
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
			mute: 0, // Needed for autoplay to work on most browsers
		},
		events: {
			onReady: (event) => {
				event.target.playVideo();
			},
			onStateChange: onPlayerStateChange,
		},
	});
};

export function PlaySongFromList(id) {
	CurrentSong.id = id;
	getYouTubeTitle(id).then((title) => {
		CurrentSong.name = title;
	});
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
