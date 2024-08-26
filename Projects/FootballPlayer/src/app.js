document.addEventListener('alpine:init', () => {
    console.log("Alpine.js initialized");

    const playersStructure = JSON.parse(localStorage.getItem("playersStructure")) || [];
    const playersList = JSON.parse(localStorage.getItem("playersList")) || [];
    
    console.log("Players Structure:", playersStructure);
    console.log("Players List:", playersList);

    Alpine.store('formation', {
        playersStructureX: playersStructure,
        playersListX: playersList,
        readyPlayers: [], 
        // readyPlayersStorage : JSON.parse(localStorage.getItem("readyPlayersxx") || []),
        addReadyPlayers(el) {
            const playerName = el.querySelector('.header').textContent;
            const playerPost = el.querySelector('.post-fill').textContent;
            const playerAge = el.querySelector('.age-fill').textContent;
            const playerImg = el.querySelector('.image img').getAttribute("src");

            const player = {
                name: playerName,
                post: playerPost,
                age: playerAge,
                img: playerImg,
            };

            this.readyPlayers.push(player);
            console.log(this.readyPlayers);
            console.log(this.readyPlayersStorage);
            localStorage.setItem("readyPlayersxx", JSON.stringify(this.readyPlayers));
        }
    });

    console.log("Store initialized:", Alpine.store('formation').playersStructureX);
    console.log("Store initialized:", Alpine.store('formation').playersListX.players);
});
