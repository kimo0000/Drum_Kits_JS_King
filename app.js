const arraySound = ["crash", "darbouka", "kick", "tombour"];

const btns = document.querySelector(".btns");

arraySound.forEach((sound) => {
  //    console.log(sound);
  const el = document.createElement("button");
  el.classList.add("btn");
  el.style.background = `url(imgs/${sound}.jpg) no-repeat center center`;
  el.style.backgroundSize = "cover";
  el.textContent = sound;

  const audio = document.createElement("audio");
  audio.src = `audios/${sound}.mp3`;
  //    console.log(audio);

  el.appendChild(audio);

  btns.appendChild(el);

  el.addEventListener("click", (ele) => {
    audio.classList.toggle("active");

    if (audio.classList.contains("active")) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
