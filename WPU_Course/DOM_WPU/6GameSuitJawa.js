let scorePlayer = 0;
let scoreComputer = 0;

function getPilihanComputer () {

    let comp = Math.random();
    let pComp = "";

    if(comp < 0.34) return "gajah";
    if(comp >= 0.34 && comp <= 0.66) return "semut";
    return "orang"
}


function getHasil(comp, player){

    if(player == comp) return "seri";
    if(player == "gajah") {
        if(comp == "semut"){
            scoreComputer++;
            return "kalah"
        }
        else{
            scorePlayer++;
            return "menang";
        }
    } 
    if(player == "semut"){
        if(comp == "orang"){
            scoreComputer++;
            return "kalah"
        }
        else{
            scorePlayer ++;
            return "menang"
        }
    }
    if(player = "orang"){
        if(comp = "gajah"){
            scoreComputer++;
            return "kalah"
        }
        else{
            scorePlayer++;
            return "menang";
        }
    }
}

const imgComputer = document.querySelector(".img-komputer");
const info = document.querySelector(".info");
const scoreComputerShow = document.getElementsByClassName("scoreComputer")[0];
const scorePlayerShow = document.getElementsByClassName("scorePlayer")[0];

// const pGajah = document.querySelector("ul li .gajah");
// pGajah.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPayer = pGajah.className;
//     hasil = getHasil(pilihanComputer, pilihanPayer);
    
//     imgComputer.setAttribute("src","Media/"+pilihanComputer+".png");
//     info.innerHTML = hasil;
// })

// const pSemut = document.querySelector("ul li .semut");
// pSemut.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPayer = pSemut.className;
//     hasil = getHasil(pilihanComputer, pilihanPayer);
    
//     imgComputer.setAttribute("src","Media/"+pilihanComputer+".png");
//     info.innerHTML = hasil;
// })

// const pOrang = document.querySelector("ul li .orang");
// pOrang.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPayer = pOrang.className;
//     hasil = getHasil(pilihanComputer, pilihanPayer);
    
//     imgComputer.setAttribute("src","Media/"+pilihanComputer+".png");
//     info.innerHTML = hasil;
// })

function Putar(){
    let i = 0;
    const gambar = ["gajah","semut","orang"];
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src","Media/"+gambar[i++]+".png")
        if(i == gambar.length)i=0;
    },100)
}
const pilihan= document.querySelectorAll("li img");
pilihan.forEach(function(pil){
    pil.addEventListener("click",function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;

        Putar();

        setTimeout(function(){
            const hasil = getHasil(pilihanComputer,pilihanPlayer);
            imgComputer.setAttribute("src","Media/"+pilihanComputer+".png");
            info.innerHTML = hasil;
            scoreComputerShow.innerHTML = scoreComputer;
            scorePlayerShow.innerHTML = scorePlayer;
        },1001)
    })
})