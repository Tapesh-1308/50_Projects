const swap = document.querySelector(".swap");
const keys = document.querySelector(".keys");
const nums = document.querySelectorAll(".num");
const input = document.querySelector(".value");
const btn = document.querySelector(".btn");

let exp = "";

swap.addEventListener("click", () => {
    keys.classList.toggle("scientific");
    const toRotate = swap.querySelector(".fa-arrows-rotate")
    toRotate.style.animation = "rotate 1s ease 1";
    setTimeout(() => {toRotate.style.animation = "none"}, 1000);
});

nums.forEach(num => {
    num.addEventListener("click", (e) => {
        e.preventDefault();
        const value = num.dataset.key;

        try {

        
            if(value === "clear") {
                exp = "";
                input.value = exp;
            }
            else if(value === "backspace") {
                exp = exp.slice(0, -1);
                input.value = exp;
            }
            else if(value === "brackets") {
                exp += getNextBracket(exp);
                input.value = exp;
            }
            else if(value === "fact") {
                exp = calculateFact(exp);
                input.value = exp;
            }
            else if(value === "=") {
                evaluateResult();
            }
            else {
                exp += value;
                input.value = exp; 
            }
        }
        catch(error) {
            exp = "";
            input.value = "Error!";
        }
    });
});

function getNextBracket(exp) {
    if (
        exp.indexOf("(") == -1 || 
        exp.indexOf("(") != -1 && 
        exp.indexOf(")") != -1 && 
        exp.lastIndexOf("(") < exp.lastIndexOf(")")
    ) {
        return "(";
    } else if (
        exp.indexOf("(") != -1 && 
        exp.indexOf(")") == -1 || 
        exp.indexOf("(") != -1 &&
        exp.indexOf(")") != -1 &&
        exp.lastIndexOf("(") > exp.lastIndexOf(")")
    ) {
        return ")";
    }
}

function calculateFact(number) {
    const num = Number(number);
    if(isNaN(num) || num < 0) {
        return "Error!";
    }

    if(num === 0) return 1;

    let result = 1;
    for(let i=2; i<=num; i++) {
        result *= i;
    }

    return result;
}
function evaluateResult() {
    const converted = exp
        .replace("%", "*0.01*")
        .replace("sin(", "Math.sin(")
        .replace("cos(", "Math.cos(")
        .replace("tan(", "Math.tan(")
        .replace("ln(", "Math.log(")
        .replace("π", "Math.PI")
        .replace(/(\d+)\^(\d+)/g, "Math.pow($1, $2)")
        .replace("√(", "Math.sqrt(");

    const result = eval(converted);
    exp = result.toString();
    input.value = exp;
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    btn.firstElementChild.classList.toggle("active");
    btn.lastElementChild.classList.toggle("active");
});