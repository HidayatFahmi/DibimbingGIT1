let pemainMadrid = {
    LB : "marcelo",
    LCB : "ramos",
    RCB : "pepe",
    RB : "coenntrao"
}

let pemainBarcelona = {
    jordi : "alba",
    carlos : "puyol",
    gerrard : "pique",
    dany : "alves"
}

// destructuring object

const {LB, LCB, RCB, RB} = pemainMadrid;
console.log(`left back = ${LB}`);
console.log(`center left back = ${LCB}`);
console.log(`center right back = ${RCB}`);
console.log(`right back = ${RB}`);

// destructuring array

const keluargaFahmi = ["Zailani","Lina","Lofi","Fiqri","Fahmi"];
const [ayah, ibu, kakak1, kakak2, saya] = keluargaFahmi
console.log(`Ayah saya adalah ${ayah}`);

const {carlos,gerrard, ...sisaNya} = pemainBarcelona;
console.log(`Sisanya ${sisaNya}`);
console.log(sisaNya)

const [anggota1,...sisaAnggota] = keluargaFahmi;
console.log(sisaAnggota) 

// destructuring function

function buatArray (hewanPertama,...isiData) {
    console.log("isiData : ",isiData)
    console.log("hewanPertama : ",hewanPertama)
    console.log(isiData.length)
}

buatArray("kucing", "kelinci", "harimau", "macan", "kura-kura")