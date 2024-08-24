document.addEventListener("DOMContentLoaded", function(){
    console.log("DOMContentLoaded event fired");

    const playersStructure = JSON.parse(localStorage.getItem("playersStructure")) || [];
    const playersList = JSON.parse(localStorage.getItem("playersList")) || {};
    console.log("Players Structure:", playersStructure);
    console.log("Players List:", playersList);

    document.addEventListener('alpine:init', () => {
        console.log("Alpine.js initialized");

        Alpine.store('formation', {
            playersStructureX: playersStructure,
            playersListX: playersList,
        });

        setTimeout(()=>{
            console.log("from starting file", Alpine.store('formation').playersStructureX);
        },100)
    });

    console.log("End of DOMContentLoaded function");
});
