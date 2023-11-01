const API = "https://pokeapi.co/api/v2/pokemon/";
const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemon = async () => {
    for(let i=1; i<=pokeCount; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const res = await fetch(API + id);
    const data = await res.json();
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name;
    const id = pokemon.id.toString().padStart(3, "0");

    const pokeTypes = pokemon.types.map(obj => obj.type.name );
    const type = main_types.find(type => pokeTypes.indexOf(type) > -1);
    const bgColor = colors[type];

    const imgUrl = pokemon.sprites.other["official-artwork"].front_default;
    pokemonEl.style.backgroundColor = bgColor;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="${imgUrl}" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    
    pokemonEl.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(pokemonEl)
    
}


fetchPokemon()