// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('searchInput');
//     const filmList = document.getElementById('filmList');
//     const films = filmList.getElementsByTagName('li');

//     searchInput.addEventListener('input', function() {
//         const query = searchInput.value.toLowerCase();
//         // console.log(query);

//         for (let i = 0; i < films.length; i++) {
//             const film = films[i].textContent.toLowerCase();

//             if (film.includes(query)) {
//                 films[i].classList.remove('hidden');
//             } else {
//                 films[i].classList.add('hidden');
//             }
//         }
//     });
// });


const searchInput = document.getElementById('searchInput');
const filmsList = document.getElementById('filmList');
const films = document.getElementsByTagName('li');

searchInput.addEventListener('input', function(){
    const query = searchInput.value.toLowerCase();

    for(i=0;i<films.length)
})