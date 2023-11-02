const password = document.getElementById("password");
const background = document.querySelector(".background");

password.addEventListener("input", (e) => {
    let length = e.target.value.length;
    let blurVal = 20 - (length * 2);

    background.style.filter = `blur(${blurVal}px)`;
});