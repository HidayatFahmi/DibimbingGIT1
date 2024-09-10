const slider = document.querySelector(".input-group input");
const container = document.querySelector(".container");
const judul = document.getElementById("title");
const games = document.getElementsByClassName("box");

// const gameIn = Array.from(games);
// console.log(gameIn)
const gameIn = Array.from(games).map((game) => 
    console.log(game.getAttribute("class"))
)

console.dir(judul.nextElementSibling.getAttribute("src"))
console.dir(container.nextSibling);
console.dir(container.nextElementSibling);




const changeColor = (e) => {
    console.log(e.target.value);
    const r = e.target.value
    document.body.style.backgroundColor = `rgb(${r}, 200, 255)`
}
slider.addEventListener("input", changeColor)