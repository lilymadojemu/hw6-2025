var video = document.querySelector(".video");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	// video.removeAttribute("autoplay"); 

	console.log("Loop is set to false")
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

// Slider Info
slider.addEventListener("input", function () {
	const volumeValue = slider.value;
	video.volume = volumeValue / 100;
	document.querySelector("#volume").innerHTML = volumeValue + "%";
});

// Pause Button, pauses the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(`Speed is ${video.playbackRate}`);
});
// Speed Up Video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log(`Speed is ${video.playbackRate}`)
});

// Skip Ahead 
document.querySelector("#skip").addEventListener("click", function() {
	const newTime = video.currentTime + 10;

	if (newTime < video.duration) {
		video.currentTime = newTime;
	} else {
		video.currentTime = 0;
	}
	console.log(`${video.currentTime}`)

});

// Mute Video 
video.muted = false;
document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		console.log("muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});
// Use oldschool class
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Yes oldSchool")
	video.classList.add("oldSchool")

});
// Remove old school class from video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("no oldSchool")
	video.classList.remove("oldSchool")
});