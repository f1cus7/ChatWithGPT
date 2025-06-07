ScrollReveal().reveal(".scroll-reveal", {
  origin: "bottom",
  distance: "10px",
  duration: 800,
  delay: 100,
  easing: "ease-out",
  reset: false,
});

const date = new Date();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
document.getElementById("chat-time").textContent = `${hours}:${minutes}`;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  document.getElementById("chat-time").textContent = `${hours}:${minutes}`;
}, 1000);

const btnExample = document.querySelector(".btn-send-example");
const inputExample = document.querySelector(".input-example");
const textExample = "Как ты высылаешь сообщения ботов?".split("");

inputExample.addEventListener("input", () => {
  const valLength = inputExample.value.length;
  if (valLength <= textExample.length) {
    inputExample.value = textExample.slice(0, valLength).join("");
  } else {
    inputExample.value = textExample.join("");
  }
});

btnExample.addEventListener("click", () => {
  if (inputExample.value == textExample.join("")) {
    inputExample.readOnly = true;
    inputExample.value = '';
    document.querySelector('.msg-to-bot').style.opacity = 1;
    setTimeout(()=> {
      document.querySelector('.msg-to-bot').style.marginBottom = '30vh';
    },2000)
    setTimeout(()=> {
      document.querySelector('.msg-from-bot').style.opacity = 1;
      new Typed("#json-typed", {
    strings: [
      `{
    "name": "Ray",
    "img": "ray.jpg",
    "textLength": 10000,
    "text": "Выпусти меня"
}`
    ],
    typeSpeed: 30,
    showCursor: false,
    escapeHtml: true
  });
    },3000)
      
  }
});