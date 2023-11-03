const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let rated = "Satified";

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        removeActive();
        rating.classList.add("active");
        rated = rating.innerText;
    });
});

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rated}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
    ratings.forEach(rating => rating.classList.remove("active"));
}
