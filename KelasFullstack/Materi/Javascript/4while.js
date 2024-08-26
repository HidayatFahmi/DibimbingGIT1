// const keyIn = "fahmi hidayat"
// let password = prompt("masukkan password");

// while(password !== keyIn){
//     password = ("enter the correct password : ")
// }
// alert("Login Succesfully");

// ==================== Break
// let limit = 0;

// while (limit <= 100) {
//   //   if (limit % 2 == 0) {
//   //     continue;
//   //   } else {
//   //     console.log(`nilai limit = ${limit}`);
//   //     limit++;
//   //   }
//   console.log(`nilai limit = ${limit}`);
//   limit++;
// }

// ==================== Tebak Angka
// let maksimum = parseInt(prompt("Masukkan nilai maksimum = "));
// let attemp = 1;

// while (!maksimum) {
//   maksimum = parseInt(prompt("Nilai maksimum belum dimasukkan!!"));
//   console.log(Boolean(maksimum));
// }

// const nilaiKomputer = Math.round(Math.random() * maksimum);
// let tebakan = parseInt(prompt("Tebak angka komputer = "));

// while (nilaiKomputer !== tebakan) {
//   attemp++;
//   console.log("nilai komputer = ", nilaiKomputer);
//   if (tebakan > nilaiKomputer) {
//     tebakan = parseInt(prompt("Tebakan terlalu tinggi, coba lagi : "));
//   }
//   if (tebakan < nilaiKomputer) {
//     tebakan = parseInt(prompt("Tebakan terlalu rendah, coba lagi : "));
//   }
// }

// alert(`Good job, tebakan anda benar!!! dalam ${attemp} kali percobaan`);

// ==================== For of
// let footballPlayers = ["Messi", "Ronaldo", "Benzema", "Ozil", "Dimaria"];
// let animal = [
//   ["eagle", "phoenix", "love bird", "cendrawasih"],
//   ["tiger", "lion", "cheetah", "elephant"],
//   ["piranha", "arwana", "gold fish", "cakalang"],
//   ["cat", "dog", "monkey", "rabbit"],
// ];

// for (player of footballPlayers) {
//   console.log(player);
// }

// for (baris of animal) {
//   console.log(`baris = ${baris}`);
//   for (stuff of baris) {
//     console.log(stuff);
//   }
// }

// ==================== For in
const studentsScore = {
  fahmi: 100,
  hidayat: 99,
  leo: 88,
  ronaldo: 87,
  ribery: 77,
};

const scores = Object.values(studentsScore);
let total = 0;

for (let student in studentsScore) {
  console.log(`${student} : ${studentsScore[student]}`);
  for (score of scores) {
    total += score;
  }
}
console.log(`score total = ${total}`);
