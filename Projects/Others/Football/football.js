document.addEventListener("DOMContentLoaded", function(){

const formation1 = document.querySelector(".formations .f1");
const players = [];
const formationData1 = [[10,25],[33,25],[62,25],[83,25],[10,50],[33,50],[62,50],[83,50],[33,75],[62,75]];

for(let i=1;i<=11;i++){
    players.push(document.querySelector(`.field .p${i}`));
}

formation1.addEventListener("click",function(){
    for(let i=0;i<formationData1.length;i++){
        players[i + 1].style.top = formationData1[i][0]+"%";
        players[i + 1].style.left = formationData1[i][1]+"%";
    }
    console.log(`formation1 clicked`);
})
})