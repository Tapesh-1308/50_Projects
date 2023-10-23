const joke = document.getElementById("joke");
const btn = document.getElementById("joke-btn");


const fetchJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    
    joke.innerText = data.joke
}

fetchJoke()
btn.addEventListener("click", fetchJoke);