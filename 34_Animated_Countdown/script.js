const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMsg = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function runAnimation() {
    const last = nums.length - 1;
    nums.forEach((num, idx) => {
        num.addEventListener("animationend", (e) => {
            if(e.animationName === "goIn" && idx !== last) {
                num.classList.remove("in");
                num.classList.add("out");
            }
            else if(e.animationName === "goOut" && idx !== last) {
                num.nextElementSibling.classList.add("in");
            }
            else {
                counter.classList.add("hide");
                finalMsg.classList.add("show");
            }
        });
    });
}

function resetDOM() {
    counter.classList.remove("hide");
    finalMsg.classList.remove("show");

    nums.forEach((num) => {
        num.classList.value = "";
    });

    nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
});