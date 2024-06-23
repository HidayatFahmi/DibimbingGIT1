const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

let arrayNama = ["fahmi","hidayat","messi","ronaldo","bale","neymar"];
let arrayNumber = [1,2,5,4,3,7,6,8,9,11,10,14,15];

let firsting = _.first(arrayNama);
let lasting = _.last(arrayNama);

console.log(firsting);
console.log(lasting);

// nth
console.log(_.nth(arrayNumber, 3));
console.log(_.nth(arrayNumber, -2));

// chunking
let cl = _.chunk(arrayNumber, 3);
console.log(cl);

// slice
let slicing = _.slice(arrayNumber, -13, 8);
console.log(slicing);

// random
let randoming1 = _.random(99);
let randoming2 = _.random(7,77);

console.log(randoming1)
console.log(randoming2)

// random array dengan sample
let sampling = _.sample(arrayNama);
console.log(sampling);

// shuffle
let shuffling = _.shuffle(arrayNama);
console.log(shuffling);
console.log(arrayNama);

// times
timesing = _.times(3,()=>{
    console.log("fahmi");
})

// delay
// function pesan(){
//     console.log("delay 10 detik")
// }

// _.delay(pesan, 20000);

// range
let vals1 = _.range(10);
console.log(vals1);

let vals2 = _.range(3, 10);
console.log(vals2);

let vals3 = _.range(0, 13, 2);
console.log(vals3);