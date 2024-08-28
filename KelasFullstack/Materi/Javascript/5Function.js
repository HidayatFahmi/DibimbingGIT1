// const lemparDadu = () => {
//   let hasil = Math.ceil(Math.random() * 6);
//   let total = hasil;
//   if (hasil == 6) {
//     total += lemparDadu();
//   }
//   return total;
// };

// console.log(lemparDadu());

// ================================= Multiple Parameter
// const arrayData1 = [1, 2, 3];
// const arrayData2 = [4, 5, 6];
// const arrayData3 = [7, 8, 9];

// const dataString1 = "fahmi";
// const dataString2 = "hidayat";
// const dataString3 = "cristiano";
// const data = (...dataX) => {
//   console.log(dataX);
// };

// data(1, 2, 3, 4, 5, 6);
// data(arrayData1, arrayData2, arrayData3);
// data(dataString1, dataString2, dataString3);

// console.log(arrayData1.join("-"));
// console.log(dataString1.split(""));

// ================================= scope variable
// let programming = "javascript";

// function ubahNama() {
//   programming = "typescript";
//   console.log(programming);
// }

// ubahNama();
// console.log(programming);

// ================================= Lexical Scope
// function laptop() {
//   let merk = "Lenovo";

//   function deskripsi() {
//     let processor = "AMD";
//     let detail = `John just bough laptop ${merk} and with processor ${processor}`;
//     console.log(detail);
//   }

//   deskripsi();
// }
// laptop();

// ================================= Lexical Scope
// function chances2(fungsi) {
//   // console.log(fungsi());
//   // console.log(fungsi());
//   fungsi();
//   fungsi();
// }

// function throwDice() {
//   let nilai = Math.round(Math.random() * 5) + 1; // Perbaiki pembulatan dan skala
//   return nilai;
// }

// console.log(chances2(throwDice));

// function hitung() {
//   let count = 0;

//   return function () {
//     count += 1;
//     return count;
//   };
//   return count;
// }

// let hitung1 = hitung();
// console.log(hitung1());
// console.log(hitung1());

// =========================== method function
// const matematika = (a, b) => {
//   return{
//     aritmatika : {
//         multiply: () => {
//           let hasil = a * b;
//           return a * b;
//         },
//     };
//   }
// };

// console.log(matematika(3,4).aritmatika.multiply());

// =========================== this

// const fahmi = {
//   nama: "fahmi hidayat",
//   usia: 25,
//   asal: "bangka belitung",
//   kenalan: function (nama) {
//     console.log(`hai nama saya ${this.nama} atau ${nama}`);
//   },
// };

// fahmi.kenalan("leo");

// =========================== Try and catch
try {
  console.log(`nama saya adalah ${nama}`);
} catch (err) {
  console.log(err.message);
}
