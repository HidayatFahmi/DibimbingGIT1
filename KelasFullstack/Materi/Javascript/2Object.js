const dataFahmi = {
    name : "fahmi hidayat",
    age : 25,
    country : "Indonesia",
}

console.log(dataFahmi.name);
console.log(dataFahmi["name"]);


for(data in dataFahmi){
    console.log(data, dataFahmi[data]);
}

const dataBaru = Object.keys(dataFahmi).forEach(x => {
    console.log(x);
})