document.addEventListener("DOMContentLoaded",function(){

    const players = [];
    const formationButtons = [];
    const selectFormation = document.querySelector(".formation-area .select-formation");
    const formations = {
        "dataFormation1": [[25,10],[25,30],[25,60],[25,82],[55,10],[50,30],[50,60],[55,82],[75,30],[75,60]],
        "dataFormation2": [[25,10],[25,30],[25,60],[25,82],[50,20],[50,44.5],[50,70],[75,10],[75,44.5],[75,82]],
        "dataFormation3": [[25,10],[25,30],[25,60],[25,82],[50,30],[50,60],[65,10],[65,44.5],[65,80],[75,44.5]],
        "dataFormation4": [[25,10],[25,30],[25,60],[25,82],[50,10],[50,30],[50,60],[50,82],[65,44.5],[75,44.5]],
        "dataFormation5": [[25,10],[25,30],[25,60],[25,82],[50,10],[50,44.5],[50,82],[65,30],[65,60],[80,44.5]],
        "dataFormation6": [[25,10],[25,30],[25,60],[25,82],[58,10],[50,25],[50,44.5],[50,64],[58,80],[75,44.5]],
        "dataFormation7": [[30,20],[30,44.5],[30,70],[50,10],[50,30],[50,58],[50,82],[70,10],[70,44.5],[70,82]],
        "dataFormation8": [[30,20],[30,44.5],[30,70],[55,10],[50,25],[50,44.5],[50,64],[55,80],[70,30],[70,58]],
        "dataFormation9": [[25,10],[20,26],[20,44.5],[20,62],[25,80],[50,20],[50,44.5],[50,70],[70,30],[70,58]]
    };


    for(let i=2;i<=11;i++){
        players.push(document.querySelector(`.player.p${i}`));
    }

    for(let i=1;i<selectFormation.children.length;i++){
    formationButtons.push(selectFormation.children[i]);
    }

    for(let i=0;i<formationButtons.length;i++){
    formationButtons[i].addEventListener("click",function(){
        for(let player=0;player<players.length;player++){
            players[player].style.bottom = formations[`dataFormation${i+1}`][player][0]+"%";
            players[player].style.left = formations[`dataFormation${i+1}`][player][1]+"%";
        }
    })
    }

    // for(let player=0;player<players.length;player++){
    //     players[player].style.bottom = formations['dataFormation9'][player][0]+"%";
    //     players[player].style.left = formations['dataFormation9'][player][1]+"%";
    // }
})






///////////////////////////// Draf


    // formation1.addEventListener("click",function(){
    //     for(let player=0;player<formations['dataFormation1'].length;player++){
    //         players[player+1].style.bottom = formations["dataFormation1"][player][0]+"%";
    //         players[player+1].style.left = formations["dataFormation1"][player][1]+"%";
    //     }
    // })

    // formation2.addEventListener("click",function(){
    //     for(let player=0;player<formations['dataFormation2'].length;player++){
    //         players[player+1].style.bottom = formations["dataFormation2"][player][0]+"%";
    //         players[player+1].style.left = formations["dataFormation2"][player][1]+"%";
    //     }
    // })
