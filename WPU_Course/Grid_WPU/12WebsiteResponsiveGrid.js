const apiKey = 'YOUR_ACCESS_KEY'; // Ganti dengan API key Anda yang sebenarnya
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&w=200&h=200`;
const dataFilm = [];

const fetchImg = async () => {
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const respjson = await resp.json();
        dataFilm.push(respjson); // Menambahkan data ke dalam array dataFilm
        console.log(dataFilm);
    } catch (err) {
        console.error(err);
    }
}

const hamburgerMenu = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function() {
    nav.classList.toggle("slide");
});

// Memanggil fetchImg untuk memastikan fungsi berjalan
fetchImg();
