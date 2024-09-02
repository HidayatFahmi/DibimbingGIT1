// const random = () => Math.random() * 1000;
// console.log(random());

// setTimeout(() => {
//   console.log("Bonjour");
// }, 1000);

// const intervalX = setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// setTimeout(() => {
//   console.log("Math random stop!!");
//   clearInterval(intervalX);
// }, 5000);

// ================== filter function
const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dataMahasiswa = [
  "fahmi",
  "leo",
  "dina",
  "chris",
  "tony",
  "andrea",
  "lois",
];
const movies = [
  {
    name: "Inception",
    rating: 88,
  },
  {
    name: "The Dark Knight",
    rating: 92,
  },
  {
    name: "Interstellar",
    rating: 78,
  },
  {
    name: "The Matrix",
    rating: 69,
  },
  {
    name: "Parasite",
    rating: 90,
  },
  {
    name: "Gladiator",
    rating: 62,
  },
  {
    name: "The Shawshank Redemption",
    rating: 91,
  },
  {
    name: "The Godfather",
    rating: 85,
  },
  {
    name: "Pulp Fiction",
    rating: 74,
  },
  {
    name: "Forrest Gump",
    rating: 82,
  },
  {
    name: "The Lion King",
    rating: 77,
  },
];

const evenlyNumber = arrayAngka.filter((angka) => angka > 5);
console.log(evenlyNumber);
const filmAwards = movies.filter((movie) => movie.rating > 80);
console.log(filmAwards);
filmAwards.sort((a, b) => b.rating - a.rating);
console.log("After sorting:", filmAwards);

const lenghtChar = dataMahasiswa.every((mahasiswa) => mahasiswa.length >= 3);
// const lenghtChar = dataMahasiswa.some((mahasiswa) => mahasiswa.length > 3);
console.log(lenghtChar);

// ================= reduce
const nilaiMahasiswa = [70, 80, 84, 77, 83, 90, 86, 82, 88];
const nilaiMaks = Math.max(...nilaiMahasiswa);
console.log("nilai mahasiswa after spread", ...nilaiMahasiswa);
console.log(`nilai mahasiswa before spread`, nilaiMahasiswa);
const averageX = nilaiMahasiswa.reduce(
  (accumulator, currentValue, currentindex, sourceArray) => {
    console.log(accumulator);
    console.log(currentValue);
    console.log(currentindex);
    console.log(sourceArray);
    return accumulator + currentValue;
  },
  0
);
console.log(averageX);

const person = {
  firstName: "john",
  lastName: "doe",
  fullName: function () {
    console.log(this.firstName);
  },

  panggilnanti: function () {
    setTimeout(() => {
      console.log(this.firstName);
    }, 3000);
  },
};

person.fullName();
person.panggilnanti();

const lemparDadu = (sisi) => {
  return Math.round(Math.random() * sisi);
};

console.log(lemparDadu(6));
console.log(lemparDadu(6));
console.log(lemparDadu(6));
console.log(lemparDadu(6));
