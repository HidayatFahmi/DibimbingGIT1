import {NAMA_PERUSAHAAN, NAMA_KARYAWAN} from './D8ModuleScopeVar.js'
const kecapGlobal = "ABCLimaDasar";

const belanjaKetoko = (punyaKecap) => {
    var kecapBurungMerak = "Burung Merak";
    console.log(`${kecapBurungMerak} di fungsi belanja toko`);

    if(punyaKecap == true){
        var penjagaToko = "Surip";
        console.log(`${penjagaToko} bilang : ${kecapBurungMerak} ada nihh`);
    }

    console.log(`memanggil dari funsi penjaga toko : ${penjagaToko}`)
}

belanjaKetoko(false);
// console.log(kecapBurungMerak) 
console.log(kecapGlobal) 
console.log(NAMA_KARYAWAN);
console.log(NAMA_PERUSAHAAN);
