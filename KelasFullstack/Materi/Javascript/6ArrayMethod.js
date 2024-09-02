// ===================== forEach
const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayString = ["fahmi", "hidayat", "leo", "ryan"];
const deskripsi = "Argentina is the country of most footbal fans in the world";

const capitalizing = deskripsi
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalizing);

const newData = [];

const multiply = arrayAngka.forEach((angka) => {
  console.log(angka * 2);
  return angka * 2;
});

console.log(multiply);

function print(element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  newData.push(element);
}

arrayAngka.forEach(print);
console.log(newData);

const movie = [
  { name: "peaky blinders", rating: 9.5 },
  { name: "john wick", rating: 9.4 },
  { name: "oppenheimer", rating: 9.3 },
  { name: "suicide squad", rating: 6.0 },
  { name: "catwoman", rating: 3.4 },
  { name: "the room", rating: 3.7 },
  { name: "batman & robin", rating: 3.8 },
  { name: "fifty shades of grey", rating: 4.1 },
  { name: "fantastic four (2015)", rating: 4.3 },
  { name: "mortal kombat: annihilation", rating: 3.7 },
  { name: "jupiter ascending", rating: 5.3 },
  { name: "transformers: the last knight", rating: 5.2 },
];

movie.forEach((film) => {
  console.log(film.name);
  console.log(film.rating);
});

const filmNominate = movie.filter((film) => {
  return film.rating >= 7;
});

console.log(filmNominate);

const uppercaseArray = arrayString.map((name) => {
  return name.toUpperCase();
});

console.log(uppercaseArray);
