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




const btnExample = document.querySelector('.btn-send-example');
const inputExample = document.querySelector('.input-example');
const textExample = 'Как ты высылаешь сообщения ботов?'.split('');

inputExample.addEventListener('input', () => {
  const valLength = inputExample.value.length;
  if (valLength <= textExample.length) {
    inputExample.value = textExample.slice(0, valLength).join('');
  } else {
    inputExample.value = textExample.join('');
  }
});

// let data;

// async function loadData() {
//   const res = await fetch("scripts/db.json");
//   const jsonStr = await res.text();
//   data = JSON.parse(jsonStr);
//   for (let i = 0; i < data.length; i++) {
//     const rand = Math.random() * 0.5 + 1;
//     const interval = Math.round(data[i].text.length * rand * 100);
//     await new Promise(resolve => setTimeout(resolve, interval));
//     console.log(data[i].text, interval);
//   }
// }

// loadData();
