// const rl = require('readline-sync')

// conditional statement if/else
// const age = rl.questionInt("Usia anda : ",{
//     limitMessage : "Input harus angka"
// })
const age = 25;

if(age >= 17){
    console.log(`Umur anda ${age} tahun anda sudah diizinkan menonton film berikut 🎥`);
}
else{
    console.log("Anda tidak diberikan izin untuk menonton film tersebut")
}

const birthYear = 1998;
let century ;

if(birthYear <= 2000){
    century=20;
}
else{
    century=21;
}

console.log(`century : ${century}`)

// Program kalkulator
let angka1 = 40;
let angka2 = 4;

let operator = "/";

if(operator == "+"){
    console.log("operator addition");
    console.log(angka1+angka2);
}
else if(operator == "-"){
    console.log("operator subtraction")
    console.log(angka1-angka2)
}
else if(operator == "x"){
    console.log("operator multiplication")
    console.log(angka1*angka2)
}
else if(operator == ":"){
    console.log("operator division")
    console.log(angka1/angka2)
}

// conditional ternary operator
let nama = "fahmi";
let username ;
console.log(nama == "fahmi" ? "anda adalah owner" : "anda tidak dikenal");
nama == "fahmi" ? username = "hidayat" : username = "siapa ya ?";
console.log(username)

// conversion (secara explisit) and coercion ()secara otomatis
let num1 = "7";
let num2 = 4;
let hasil1=num1+num2;
let hasil2=num1-num2;
console.log(hasil1)
console.log(hasil2)

// Truthy and falsy values
if(null){
    console.log("masuk ke block true")
}
else{
    console.log("masuk ke block false")
}

// Switch statement
let hari = "Jum'at";
let operator2 = ":"
let num3 = 88;
let num4 = 4;

switch(hari){
    case "Minggu": //using "===" the strict equal
        console.log("Jadwal bermain futsal");
        break;
    case "Senin":
        console.log("Belajar bahasa german");
        break;
    case "Selasa":
        console.log("Belajar bahasa german");
        break;
    case "Rabu":
    case "Kamis":
        console.log("Belajar bahasa Spanyol");
        break;
    case "Jum'at":
    case "Sabtu":
        console.log("Belajar bahasa prancis ");
        break;
    default:
        console.log("Bukan nama hari");
    }

switch(operator2){
    case "+":
        console.log(num3+num4);
        break;
    case "-":
        console.log(num3-num4);
        break;
    case "x":
        console.log(num3*num4);
        break;
    case ":":
        console.log(num3/num4);
        break;
    default:
        console.log("Operator salah");
    }

    // For satetment
for(let step=1;step<=5;step++){
    console.log(`maju ${step} langkah kedepan`)
}

for(let second = 5;second>=0;second--){
    if(second>=1){
        console.log(`Tahun baru akan dimulai dalam ${second}`)
    }
    else{
        console.log(`Selamat tahun baru 🎇🎇🎇`)

    }
}

for(let a=1;a<=100;a++){
    if(a%2===0 || a*3==0){
        continue;
    }
    else if(a >= 70){
        break;
    }
    console.log(`nilai a = ${a}`)
}

// for of
let array = [2,3,4,5,8,7,9]

for(const elem of array){
    console.log(`element array = ${elem}`)
}

let object1 = {
    nama : "Fahmi",
    umur : 25,
    asal : "Bangka Belitung"
}

for (const key in object1){
    console.log(`key-nya : ${key}, object1 : ${object1[key]}`)
}

// while

let switchLamp = true;
let countlamp1 = 0;

while(switchLamp){
    countlamp1++;
    console.log(`switch lamp on ${countlamp1}`)
    if(countlamp1>1000){
        switchLamp=false;
    }
}

do{
    countlamp1+=100;
    console.log(`value dari countLamp = ${countlamp1}`)
}while(countlamp1<1001)

    let dice ;
    console.log(`dice = ${dice}`)

    do{
        dice = Math.ceil(Math.random()*6);
        console.log(`Kocok dadu = ${dice}`)
    }while(dice !== 6)