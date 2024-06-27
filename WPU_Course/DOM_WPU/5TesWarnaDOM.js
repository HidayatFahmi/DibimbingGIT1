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