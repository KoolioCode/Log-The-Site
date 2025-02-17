let progress = document.getElementById("playback")
let song = document.getElementById("song")
let cplay = document.getElementById("cplay")

song.onloadeddata =function(){
    playback.max = song.duration;
    playback.value = song.currentTime;
}

function playPause(){
    if(cplay.classList.contains("fa-play")){
        song.play();
        cplay.classList.add("fa-pause");
        cplay.classList.remove("fa-play");
    }
    else{
        song.pause();
        cplay.classList.remove("fa-pause");
        cplay.classList.add("fa-play");
    }
}

    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);

progress.onchange = function(){
    song.currentTime = progress.value;
    cplay.classList.add("fa-pause");
    cplay.classList.remove("fa-play");
}
