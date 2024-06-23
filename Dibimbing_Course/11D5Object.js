let dataFahmi = {
    nama : "Fahmi Hidayat",
    umur : 25,
    asal : "Bangka Belitung",
    jomblo : true,
}
let mySalaries = {
    january : 3000,
    february : 5000,
    march : 2500,
    april : 5000,
    may : 3000,
    juni : 4000,
    juli : 7500
}

console.log(dataFahmi.nama);
dataFahmi.hobby = "Sepak Bola";
console.log(dataFahmi.hobby);
delete dataFahmi.jomblo;
console.log(dataFahmi);

// looping
for(data in dataFahmi){
    console.log(data);
}

function sumSalaries(gaji){
    let total = 0;
    for(key in gaji){
        total+=gaji[key];
        // console.log(Object.values(key))
    }
    return total;
}

console.log(sumSalaries(mySalaries));





