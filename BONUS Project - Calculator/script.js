const swap = document.querySelector(".swap");
const keys = document.querySelector(".keys");
const nums = document.querySelectorAll(".num");
const input = document.querySelector(".value");

let exp = "";

nums.forEach(num => {
    num.addEventListener("click", (e) => {
        e.preventDefault();

        if(num.innerText === "=") {
            try {
                exp = eval(exp).toString();
                input.value = exp;
            }
            catch(e) {
                input.value = "Error!";
                exp = "";
            }
        }
        else if(num.innerText === "AC") {
            exp = "";
            input.value = exp;
        }
        else if(num.innerText === "") {
            exp = exp.slice(0, -1);
            input.value = exp;
        }
        else if(num.innerHTML === "<i>x<sup>y</sup></i>") {
            exp += "^";
            input.value = exp;
        }
        else {
            exp += num.innerText;
            input.value = exp;
        }

    });
});

swap.addEventListener("click", () => {
    keys.classList.toggle("scientific");
    const toRotate = swap.querySelector(".fa-arrows-rotate")
    toRotate.style.animation = "rotate 1s ease 1";
    setTimeout(() => {toRotate.style.animation = "none"}, 1000);
});