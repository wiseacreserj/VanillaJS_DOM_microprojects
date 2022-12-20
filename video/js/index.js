const preload = document.querySelector(".preload-img");
const videoContainer = document.querySelector(".c-video-container");
const video = document.querySelector(".c-video-container__bg-video");
const videoControl = document.querySelector(".c-video-control");
const videoControlSwitch = document.querySelector(".c-video-control__switch");

videoControl.addEventListener("click", () => {
    videoControlSwitch.classList.toggle("c-video-control__switch--slided");
    if (
        videoControlSwitch.classList.contains("c-video-control__switch--slided")
    ) {
        video.pause();
    } else {
        video.play();
    }
});

function showVideoBackground() {
    preload.style.display = "none";
    videoContainer.style.display = "flex";
}

window.addEventListener("load", showVideoBackground);
