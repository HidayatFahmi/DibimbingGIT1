document.addEventListener('alpine:init', () => {
    // Inisialisasi store langsung pada saat Alpine diinisialisasi
    const playersStructure = JSON.parse(localStorage.getItem("playersStructure")) || [];
    const playersList = JSON.parse(localStorage.getItem("playersList")) || {};
    console.log("Players Structure:", playersStructure);
    console.log("Players List:", playersList);
    console.log("===========")

    Alpine.store('formation', {
        playersStructureX: playersStructure,
        playersListX: playersList,
    });

    // Logging untuk memastikan data sudah terdaftar
    console.log("from starting file", Alpine.store('formation').playersStructureX);
});

// console.log("///////////");