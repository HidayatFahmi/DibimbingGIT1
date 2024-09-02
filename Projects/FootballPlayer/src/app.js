document.addEventListener("alpine:init", () => {
  console.log("Alpine.js initialized");

  const playersStructure =
    JSON.parse(localStorage.getItem("playersStructure")) || [];
  const playersList = JSON.parse(localStorage.getItem("playersList")) || [];

  console.log("Players Structure:", playersStructure);
  console.log("Players List:", playersList);

  Alpine.store("formation", {
    playersList: playersList,
    readyPlayers : [],
    addReadyPlayers(el){
      const name = el.querySelector(".header").textContent;
      const position =  el.querySelector(".post-fill").textContent;
      const players = {
        name : name,
        post : position
      }
      this.readyPlayers.push(players);
      console.log(this.readyPlayers)
    },
  });
});
