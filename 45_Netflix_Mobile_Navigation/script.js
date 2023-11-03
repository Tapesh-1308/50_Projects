const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
    nav.forEach(curr => {
        curr.classList.add("visible");
    });
});

closeBtn.addEventListener("click", () => {
    nav.forEach(curr => {
        curr.classList.remove("visible");
    });
});
