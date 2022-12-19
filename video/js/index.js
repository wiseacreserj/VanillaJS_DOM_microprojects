console.time("start render");

const preload = document.querySelector(".preload-img");
const videoContainer = document.querySelector(".c-video-container");
const video = document.querySelector(".c-video-container__bg-video");

/* console.log(preload); */
console.log(videoContainer);
console.log(video);

function videoHandler() {
    console.time();
    console.log("can play comlete");
    preload.style.display = "none";
    videoContainer.style.display = "flex";
    console.timeEnd();
}

video.addEventListener("canplaythrough", videoHandler);
if (video.readyState > 3) {
    videoHandler();
}

console.timeEnd("start render");
