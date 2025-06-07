let data;

async function loadData() {
  const res = await fetch("scripts/db.json");
  const jsonStr = await res.text();
  data = JSON.parse(jsonStr);

  const chat = document.querySelector('.chat');

  for (const msg of data) {
    await new Promise(resolve => setTimeout(resolve, msg.textLength));

    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    // Вставляем в чат сообщение без класса show
    chat.insertAdjacentHTML('beforeend', `
      <div class="msg">
        <div class="nameimg">
          <img src="images/${msg.img}" alt="" class="chat-img" />
          <p>${msg.name}</p>
        </div>
        <p class="msg-text">${msg.text}</p>
        <div class="msg-time">${time}</div>
      </div>
    `);

    // Получаем последний добавленный элемент .msg
    const msgElem = chat.lastElementChild;

    // Триггерим анимацию в следующем цикле рендера
    requestAnimationFrame(() => {
      msgElem.classList.add('show');
    });

    // Прокручиваем чат вниз
    chat.scrollTop = chat.scrollHeight;
  }
}

loadData();