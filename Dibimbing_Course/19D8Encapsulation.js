// class Mahasiswa{
//     constructor(nama,ipk){
//         this.nama = nama;
//         let ipkPrivate = ipk;

//         this.lanjutKelas = function(){
//             if(ipkPrivate > 2.50){
//                 console.log(`mahasiswa dengan nama ${this.nama} lanjut kelas`);
//             }
//             else{
//                 console.log(`mahasiswa dengan nama ${nama} mengulang kelas`)
//             }
//         }
//     }

//     catatan(){
//         console.log(`ayo ${this.nama} belajar lagi`);
//         console.log(`IPK = ${this.ipkPrivate}`)
//     }
// }

// fahmi = new Mahasiswa("fahmi", 3.7);
// deni = new Mahasiswa("deni", 2.00);
// console.log(fahmi.lanjutKelas());

// console.log(fahmi.ipkPrivate);
// console.log(fahmi.catatan());

// ============ Latihan
class Person{
    constructor(nama, umur, jenisKelamin, alamat="alamat tidak tersedia"){
        this.nama = nama;
        this.umur = umur;
        this.jenisKelamin = jenisKelamin;

        let alamatPrivate;

        this.setAlamat = function (setAlamatnya){
           alamatPrivate = setAlamatnya;
        }

        this.getAlamat= function (){
            console.log(`alamat saya ${alamatPrivate}`)
        }
    }

    kenalan(){
        console.log(`Halo salam kenal saya ${this.nama} saya seorang ${this.jenisKelamin} berusia ${this.umur} tahun`)
    }
}

fahmi = new Person("fahmi",25,"pria");
fahmi.setAlamat("Batu Aji");
fahmi.getAlamat();

fahmi.kenalan();