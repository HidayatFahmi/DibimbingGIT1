let fahmi = {
    nama : "fahmi",
    hobby : "sepak bola"
}

let hidayat = {
    nama : "hidayat",
    umur : 25
}

const kartuKeluargaFahmi = {
    ibu : "lina",
    ayah : "zailani",
    kakak1 : "lofi",
    kakak2 : "fiqri",
    saya : "fahmi hidayat"
}

const pemainMadrid = ["ronaldo","ozil","marcelo","bale"];
const pemainBarcelona = ["messi","iniesta","xavi","puyol"];
const elClasico = [...pemainBarcelona, ...pemainBarcelona];

let tentangFahmi = {
    ...fahmi,
    TTL : "Belitung Timur"
}

const fahmiHidayat = {
    ...fahmi,
    ...hidayat
}

console.log(tentangFahmi);
console.log(elClasico);
console.log(`Fahmi Hidayat : ${fahmiHidayat}`)
console.log(fahmiHidayat)