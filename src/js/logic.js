import { CurrentSong } from "./data.svelte.js";
import { onMount } from "svelte";
import data from "./data.json" assert { type: "json" };
export let songs = data;

let player;

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
		},
	});
};

export function PlaySongFromList(id, name, img) {
	CurrentSong.id = id;
	CurrentSong.name = name;
	CurrentSong.img = img;
	CurrentSong.Playing = true;
	playsong(id);
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



/*const videoId = 'dQw4w9WgXcQ';
const url = `https://www.youtube.com/watch?v=${videoId}`;&#8203;:contentReference[oaicite:13]{index=13}

:contentReference[oaicite:14]{index=14}
  .then(response => response.json())
  .then(data => console.log(data.title))
  .catch(error => console.error('Error fetching video title:', error));
*/