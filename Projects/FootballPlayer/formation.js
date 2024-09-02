export default function Formations() {
  const players = [];
  const formationButtons = [];
  const selectFormation = document.querySelector(
    ".formation-area .select-formation"
  );
  let playersStructure = [];

  const formations = {
    dataFormation1: {
      // 4-4-2
      structures: ["GK","RB","RCB","LCB","LB","RW","AMF","DMF","LW","ST","ST"],
      koordinat: [[25, 10],[25, 30],[25, 60],[25, 82],[55, 10],[50, 30],[50, 60],[55, 82],[75, 30],[75, 60]]
    },
    dataFormation2: {
      // 4-3-3
      structures: ["GK","RB","RCB","LCB","LB","RW","AMF","DMF","LW","SS","ST"],
      koordinat: [[25, 10],[25, 30],[25, 60],[25, 82],[50, 20],[50, 44.5],[50, 70],[75, 10],[75, 44.5],[75, 82]]
    },
    dataFormation3: {
      // 4-2-3-1
      structures: ["GK","RB","RCB","LCB","LB","RW","DMF","DMF","LW","AMF","ST"],
      koordinat: [[25, 10],[25, 30],[25, 60],[25, 82],[42, 30],[42, 60],[60, 18],[58, 44.5],[60, 72],[75, 44.5]]
    },
    dataFormation4: {
      // 4-4-1-1
      structures: ["GK","RB","RCB","LCB","LB","RW","DMF","DMF","LW","SS","ST"],
      koordinat: [[25, 10],[25, 30],[25, 60],[25, 82],[50, 10],[50, 30],[50, 60],[50, 82],[65, 44.5],[75, 44.5]]
    },
    dataFormation5: {
      // 4-3-2-1
      structures: ["GK","RB","RCB","LCB","LB","RW","AMF","DMF","LW","ST","ST"],
      koordinat: [[25, 10],[25, 30],[25, 60],[25, 82],[50, 10],[50, 44.5],[50, 82],[65, 30],[65, 60],[80, 44.5]]
    },
    dataFormation6: {
      // 4-5-1
      structures: ["GK","RB","RCB","LCB","LB","RW","AMF","DMF","DMF","LW","ST"],
      koordinat: [[25, 10], [25, 30], [25, 60],[25, 82],[58, 10],[50, 25],[50, 44.5],[50, 64],[58, 80],[75, 44.5]]
    },
    dataFormation7: {
      // 3-4-3
      structures: ["GK","RB","RCB","LB","LW","RW","AMF","DMF","SS","ST","ST"],
      koordinat: [[30, 20],[30, 44.5],[30, 70],[50, 10],[50, 30],[50, 58],[50, 82],[70, 10],[70, 44.5],[70, 82]]
    },
    dataFormation8: {
      // 3-5-2
      structures: ["GK","RB","RCB","LB","RW","AMF","DMF","DMF","LW","ST","ST"],
      koordinat: [[30, 20],[30, 44.5],[30, 70],[55, 10],[50, 25],[50, 44.5],[50, 64],[55, 80],[70, 30],[70, 58]]
    },
    dataFormation9: {
      // 5-3-2
      structures: ["GK","RB","RCB","CB","LB","RW","AMF","DMF","LW","ST","ST"],
      koordinat: [[25, 10],[20, 26],[20, 44.5],[20, 62],[25, 80],[50, 20],[50, 44.5],[50, 70],[70, 30],[70, 58]]
    },
  };

  const playersList = {
    players: [
      { id: 1, name: "fahmi", position: "AMF", age: 25 },
      { id: 2, name: "hidayat", position: "DMF", age: 27 },
      { id: 3, name: "ronaldo", position: "LW", age: 39 },
      { id: 4, name: "cristiano", position: "RW", age: 29 },
    ],
  };

  localStorage.setItem("playersList", JSON.stringify(playersList));

  for (let i = 2; i <= 11; i++) {
    players.push(document.querySelector(`.player.p${i}`));
  }

  for (let i = 1; i < selectFormation.children.length; i++) {
    formationButtons.push(selectFormation.children[i]);
  }

  for (let i = 0; i < formationButtons.length; i++) {
    formationButtons[i].addEventListener("click", function () {
      playersStructure = ["GK"];
      for (let player = 0; player < players.length; player++) {
        players[player].style.bottom =
          formations[`dataFormation${i + 1}`].koordinat[player][0] + "%";
        players[player].style.left =
          formations[`dataFormation${i + 1}`].koordinat[player][1] + "%";
        playersStructure.push(
          formations[`dataFormation${i + 1}`].structures[player + 1]
        );
      }
      console.log(playersStructure);
      localStorage.setItem(
        "playersStructure",
        JSON.stringify(playersStructure)
      );
    });
  }

  // for(let player=0;player<players.length;player++){
  //     players[player].style.bottom = formations['dataFormation3'].koordinat[player][0] + "%";
  //     players[player].style.left = formations['dataFormation3'].koordinat[player][1] + "%";
  // }
}

// Panggil fungsi setelah DOM dimuat
document.addEventListener("DOMContentLoaded", Formations);
