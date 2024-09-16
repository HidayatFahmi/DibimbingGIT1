const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector(".container");


for(let a=1;a<=500;a++){
    const pokeBall = document.createElement("div");
    pokeBall.classList.add("pokemon", "poke1");
    
    const pokePict = document.createElement("img");
    pokePict.src = `${baseURL}/${a}.png`

    const name = document.createElement("span");
    name.classList.add("pokeLabel")
    name.innerText = `Poke ${a}`;

    pokeBall.appendChild(pokePict);
    pokeBall.appendChild(name);
    container.appendChild(pokeBall);
}