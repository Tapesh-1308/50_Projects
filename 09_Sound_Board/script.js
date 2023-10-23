const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    const button = document.createElement('button');
    button.classList.add("btn");
    button.innerText = sound;

    button.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.querySelector(".buttons").appendChild(button);
});

function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}