const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const target = document.getElementById("trigger");
const btnMusic = document.getElementById("btn-music");
let shown = false;
const audio = new Audio("/audio/music.mp3");

function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "";
}

window.addEventListener("scroll", () => {
  if (shown) return;
  const rect = target.getBoundingClientRect();
  const vh = window.innerHeight;
  if (rect.top <= vh && rect.bottom >= 0) {
    modal.classList.add("show");
    disableScroll();
    shown = true;
    document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
    modal.classList.remove("show");
  enableScroll();
    }
});
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  enableScroll();
});

btnMusic.addEventListener("click", () => {
  modal.classList.remove("show");
  enableScroll();
  audio.play();
})
