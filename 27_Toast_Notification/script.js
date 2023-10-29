const toasts = document.getElementById("toasts");
const button = document.getElementById("button");

const messages = ["Messag One", "Messag Two", "Messag Three", "Messag Four"];
const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(msg = null, type = null) {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = msg ? msg : getRandomMessage();

    toasts.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}