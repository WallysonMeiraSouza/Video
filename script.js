const video = document.createElement("video");
video.src = "./Vídeo.mp4";
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;
video.controls = true;

document.body.appendChild(video);

window.addEventListener("load", () => {
    video.play().catch(err => {
      console.log("Autoplay bloqueado:", err);
    });
});

window.addEventListener("load", ()=>{
  setTimeout(()=>{
    video.muted = false;
  }, 500)

});

