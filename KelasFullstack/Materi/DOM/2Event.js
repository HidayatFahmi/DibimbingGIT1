const tombol = document.getElementsByTagName("button");
const setter = document.querySelector(".set");
let getter = document.querySelector(".get");
const generateButton = document.querySelector(".generate");
const rgbText = document.querySelector(".rgb");
const eventInput = document.querySelector(".eventInput");
const car = document.querySelector(".box");
const carArrow = document.querySelector(".box .title");
let boxTop = 0;
let boxLeft = 0;

const form = document.querySelector("#form");

setter.addEventListener("input", (e)=>{
    getter.value = e.target.value;
})

function generateColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a = Math.random();

    return `rgb(${r}, ${g}, ${b})`;
}

generateButton.addEventListener("click", () => {
    document.body.style.backgroundColor = generateColor();
    rgbText.textContent = generateColor();
})

// penerapan this

const buttons = document.querySelectorAll(".buttons button");

for(let tombol of buttons){
    tombol.addEventListener("click",generateBackGround);
}

function generateBackGround(e){
    console.log(e)
    return this.style.backgroundColor = generateColor();
}

eventInput.addEventListener("keydown", (e)=>{
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e);

    switch(e.code){
        case "ArrowUp":
            console.log("Maju");
            boxTop--;
            car.style.top = `${boxTop}px`;
            carArrow.textContent = "🔼"
            break;

        case "ArrowDown":
            console.log("Mundur");
            boxTop++;
            car.style.top = `${boxTop}px`;
            carArrow.textContent = "🔽"
            break;

        case "ArrowLeft":
            console.log("Kiri");
            boxLeft--;
            car.style.left = `${boxLeft}px`;
            carArrow.textContent = "◀";
            break;

        case "ArrowRight":
            console.log("Kanan");
            boxLeft++;
            car.style.left = `${boxLeft}px`;
            carArrow.textContent = "▶"
            break; 
        
        default:
            console.log("Not an option");
    }
})

form.addEventListener("click",(e) => {
    console.log('submitted');
    e.preventDefault();
})