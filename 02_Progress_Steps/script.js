let next = document.getElementById("next")
let prev = document.getElementById("prev")
let progress = document.getElementById("progress");
let circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
    if(currentActive < circles.length)
        currentActive++;
    update();
})

prev.addEventListener("click", () => {
    if(currentActive > 1)
        currentActive--;
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive)
            circle.classList.add("active");
        else 
            circle.classList.remove("active");
    })  

    let actives = document.querySelectorAll(".active");
    progress.style.width = (100/(circles.length - 1) * (currentActive - 1)) + "%";


    if(currentActive == 1)
        prev.disabled = true;
    else if(currentActive == circles.length)
        next.disabled = true;
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}