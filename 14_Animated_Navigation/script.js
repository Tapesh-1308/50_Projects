const nav = document.getElementById("nav");
const icon = document.getElementById("toggle");

icon.addEventListener("click", () => {
    nav.classList.toggle("active");
});