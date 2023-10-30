const text = document.getElementById("text");
const speedInput = document.getElementById("speed");
const msg = "We Love Programming!";
let idx = 1;
let speed = 300 / speedInput.value;

speedInput.addEventListener("input", (e) => speed = 300 / e.target.value);

writeText();
function writeText() {
    text.innerText = msg.substring(0, idx);
    idx++;

    if(idx >= msg.length)  {
        idx = 1;
    }

    setTimeout(writeText, speed);
}