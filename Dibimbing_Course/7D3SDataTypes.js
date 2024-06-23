// var : nilainya bisa dirubah

// Echma script/ES16
// let
// const : nilainya tetap 

let nama =  "fahmi hidayat"
console.log(typeof nama)

// Number
let number1 = 1234566
let number2 = 3.45434
console.log(typeof number1,typeof number2)

// Boolean : true or false
let bool1 = true;
let bool2 = false;
let bool3 = "fahmi"
console.log(typeof bool1)

// null
let null1
let null2 = null;
console.log(null1)
console.log(null2)

// object
// array terdiri dari index2 yang dimulai dari 0 dan bisa menmapung banyak tipe data
let aku = {
    "nama" : "fahmi hidayat",
    "usia" : 25,
    "asal" : "belitung",
    "gender" : "Pria",
    "array" : [0,1,2,3,4,"fahmi",6,7,8,9]
}

aku.hobby = "sepak bola"

console.log(aku)
console.log(aku.nama)
console.log(typeof aku)
console.log(aku.array[7])
console.log(aku.array.indexOf("fahmi"))
console.log(typeof aku.array[5])

// array
let array1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// function
const function1 = () => {
    console.log("panggil function")
}

function1()
console.log(typeof function1)

