const loveMe = document.querySelector(".love-me");
const times = document.querySelector("#times");

let count = 0;

loveMe.addEventListener("dblclick", (e) => {
    const heart = document.createElement("i");
    heart.classList = "fas fa-heart";
    
    const pointer_x = e.clientX;
    const pointer_y = e.clientY;
    const box_left_offset = e.target.offsetLeft;
    const box_top_offset = e.target.offsetTop;

    const xInBox = pointer_x - box_left_offset;
    const yInBox = pointer_y - box_top_offset;

    heart.style.top = `${yInBox}px`;
    heart.style.left = `${xInBox}px`;

    loveMe.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);

    count++;
    times.innerText = count;

});
