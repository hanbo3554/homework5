var video = document.querySelector("#videoplayer");

window.addEventListener("load", function() {
	console.log("Load Video")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
    if (video.playbackRate >= 1)
	    video.playbackRate -= 0.5;
    else
        window.alert('Video is at slowest speed!')
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
    if (video.playbackRate <= 1.5)
	    video.playbackRate += 0.5;
    else
        window.alert('Video is at fastest speed!')
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Skip Video: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
           video.muted = true;
           document.querySelector("#mute").innerHTML="Unmute";
    }
    else {
        video.muted = false;
        document.querySelector("#mute").innerHTML="Mute";
    }
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Change Volume: " + this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});