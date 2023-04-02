const audioFileInput = document.getElementById("audioFileInput");
const addAudioButton = document.getElementById("addAudioButton");
const videoFileInput = document.getElementById("videoFileInput");
const addVideoButton = document.getElementById("addVideoButton");
const imageFileInput = document.getElementById("imageFileInput");
const addImageButton = document.getElementById("addImageButton");
const playlistList = document.getElementById("playlistList");
const addPlaylistButton = document.getElementById("addPlaylistButton");
const savePlaylistButton = document.getElementById("savePlaylistButton");
let playlist = [];

addAudioButton.addEventListener("click", () => {
	const file = audioFileInput.files[0];
	if (file) {
		// Code for adding audio file to media app
	}
});

addVideoButton.addEventListener("click", () => {
	const file = videoFileInput.files[0];
	if (file) {
		// Code for adding video file to media app
	}
});

addImageButton.addEventListener("click", () => {
	const file = imageFileInput.files[0];
	if (file) {
		// Code for adding image file to media app
	}
});

addPlaylistButton.addEventListener("click", () => {
	const files = playlist.concat(Array.from(audioFileInput.files), Array.from(videoFileInput.files));
	for (const file of files) {
		if (!playlist.includes(file.name)) {
			playlist.push(file.name);
			const li = document.createElement("li");
		
        }
    }
    });