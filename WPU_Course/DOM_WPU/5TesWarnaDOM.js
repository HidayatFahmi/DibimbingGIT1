const button1 = document.getElementById("tChangeColor");

function fChangeColor(){
    // document.body.style.backgroundColor = "green";
    // document.body.setAttribute("class","biru-muda");
    document.body.classList.toggle("biru-muda");
}
button1.addEventListener("click",fChangeColor);

const tRandom = document.createElement("button");
tRandom.textContent = "Acak Warna";
tRandom.setAttribute("type","button");
button1.after(tRandom);

tRandom.addEventListener("click",function(){
    const red = Math.ceil(Math.random()*255);
    const green = Math.ceil(Math.random()*255);
    const blue = Math.ceil(Math.random()*255);
    console.log(`red = ${red}`);
    console.log(`green = ${green}`);
    console.log(`blue = ${blue}`);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue}`;
})

const redSlider = document.querySelector("input[name=redSlider]");
const greenSlider = document.querySelector("input[name=greenSlider]");
const blueSlider = document.querySelector("input[name=blueSlider]");
const opacitySlider = document.querySelector("input[name=opacity_]")

const showRed = document.getElementsByClassName("merah")[0];
const showGreen = document.getElementsByClassName("hijau")[0];
const showBlue = document.getElementsByClassName("biru")[0];
const showOpacity = document.querySelector(".opacity_");

function changeColor2(){
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const opa = opacitySlider.value/100;

    showRed.innerHTML = `<span> ${red} </span>`
    showGreen.innerHTML = `<span> ${green} </span>`
    showBlue.innerHTML = `<span> ${blue} </span>`
    showOpacity.innerHTML = `<span> ${opa} </span>`

    document.body.style.backgroundColor = `rgba(${red},${green},${blue},${opa})`;
    console.log(`redValue = ${red}`);
    console.log(`greenValue = ${green}`);
    console.log(`blueValue = ${blue}`);
    console.log(`opacityValue = ${opa}`);
}

redSlider.addEventListener("input",changeColor2);
greenSlider.addEventListener("input",changeColor2);
blueSlider.addEventListener("input",changeColor2);
opacitySlider.addEventListener("input",changeColor2);


document.body.addEventListener("mousemove",function(eventnya){
    // posisi mouse
    console.log(`nilai event = ${eventnya.clientX}`);
    console.log(`nilai event = ${eventnya.clientY}`);
    // ukuran browser
    // console.log(`window = ${window.innerWidth}`);
    const xPos = Math.round(eventnya.clientX / window.innerWidth*255);
    const yPos = Math.round(eventnya.clientY / window.innerHeight*255);
    console.log(`xPos = ${xPos}`);
    console.log(`yPos = ${yPos}`);

    document.body.style.backgroundColor = `rgb(${xPos},${yPos},125)`;
})