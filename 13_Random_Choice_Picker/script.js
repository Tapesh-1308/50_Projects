const tags = document.getElementById("tags")
const textarea = document.querySelector("textarea");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
    createTags(event.target.value);

    if(event.key == "Enter") {
        setTimeout(() => event.target.value = "", 10);      
        randomSelect();
    }
})

function createTags(value) {
    const tagsData = value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tags.innerHTML = "";

    tagsData.forEach(tagData => {
        const tag = document.createElement('span');
        tag.classList.add("tag");
        tag.innerText = tagData;

        tags.appendChild(tag);
    });
}

function randomSelect() {
    
    const interval = setInterval(() => {
        const randomTag = getRandomTag();
        hightlight(randomTag);

        setTimeout(() => {
            unhighlight(randomTag);
        }, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval);
        
        const randomTag = getRandomTag();
        setTimeout(() => {
            hightlight(randomTag);
        }, 100);

    }, 3000);
    
}

function getRandomTag() {
    const allTags = document.querySelectorAll(".tag");
    return allTags[Math.floor(Math.random() * allTags.length)];    
}

function hightlight(tag) {
    tag.classList.add("highlight");
}

function unhighlight(tag) {
    tag.classList.remove("highlight");
}

