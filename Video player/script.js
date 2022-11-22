const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const videoContainerEl = document.querySelector(".video-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
     videoContainerEl.classList.remove("active"); //video will play if we remove active class

});

closeIconEl.addEventListener("click", () => {
    videoContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});