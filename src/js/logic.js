import data from "./data.json" assert { type: "json" };

export let songs = data;

let player;

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

export let CurrentSong = {
	id: "-GUcNi1Jmhw",
	name: "Song Name",
	img: "https://placehold.co/400",
};

/*

// @ts-ignore
window.onYouTubeIframeAPIReady = () => {
	// @ts-ignore
	player = new YT.Player("player", {
		videoId: "-GUcNi1Jmhw",
		playerVars: {
			autoplay: 1,
			controls: 1,
		},
		events: {
			onReady: (event) => {
				event.target.playVideo();
			},
		},
	});
};
*/

export function PlaySongFromList(id, name, img) {
	alert("PlaySongFromList: " + id);

	CurrentSong.id = id;
	CurrentSong.name = name;
	CurrentSong.img = img;
}
