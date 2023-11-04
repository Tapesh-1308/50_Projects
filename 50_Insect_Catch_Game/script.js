const playBtn = document.querySelector("#start-btn");
const screens = document.querySelectorAll(".screen");
const chooseInsect = document.querySelectorAll(".choose-insect-btn");
const gameContainer = document.querySelector("#game-container");
const message = document.querySelector("#message");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

let selected = {};
let score = 0;
let timer = 0;

playBtn.addEventListener("click", () => screens[0].classList.add("up"));

chooseInsect.forEach(insect => {
    insect.addEventListener("click", () => {
        const img = insect.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");

        selected = {src, alt};
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(() => {
        increaseTime();
    }, 1000);
}

function increaseTime() {
    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    timeEl.innerText = `Time: ${min}:${sec}`;
    timer++;
}

function createInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");

    const {x, y} = getRandomLocation();

    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;

    insect.innerHTML = `<img src="${selected.src}" alt="${selected.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    insect.addEventListener("click", catchInsect);
    gameContainer.appendChild(insect);
    
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return {x, y};
}

function catchInsect() {
    increaseScore();
    this.classList.add("caught");
    setTimeout(() => this.remove(), 2000);
    addInsects();
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add("visible");
    }
    scoreEl.innerText = `Score: ${score}`;
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}
