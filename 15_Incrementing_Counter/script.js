const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = 0;

    const target = +counter.getAttribute("data-target");
    const increment = target / 200;
    
    setInterval(() => {
        const c = +counter.innerText;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
        }
        else {
            counter.innerText = target;
        }
    }, 1);
})