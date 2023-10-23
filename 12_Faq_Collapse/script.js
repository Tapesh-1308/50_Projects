const accordion = Array.from(document.getElementsByClassName("content-container"));

let prev = accordion[0];

accordion.forEach((item) => {
    item.addEventListener("click", () => {
        if(prev != item)
            prev.classList.remove("active");
        item.classList.toggle("active"); 
        prev = item;
    });
});