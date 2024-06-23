// class
class sepatu{
    constructor(model = "tanpa nama", warna = "none"){
        this.model = model;
        this.warna = warna;
        this.jumlahSepatu = 2;
    }

    berjalan(){
        console.log(`sepatu dengan model ${this.model} digunakan untuk berlari`)
    }

    berlari(){
        console.log(`sepatu dengan model ${thid.model} dengan warna ${this.warna} digunakan untuk berjalan`)
    }
}

sepatuNike = new sepatu("Nike","Merah");
sepatuPuma = new sepatu("Puma","Biru");
sepatuAdidas = new sepatu("Adidas","Putih");

console.log(sepatuNike);
console.log(sepatuNike.model);

/////////////////// latihan 1
class Person{
    constructor(nama,umur,jenisKelamin){
        this.nama=nama;
        this.umur=umur;
        this.jenisKelamin=jenisKelamin;
        }

        kenalan(){
            console.log(`Halo nama saya adalah ${this.nama}, umur saya sekarang ${this.umur} saya seorang ${this.jenisKelamin}`)
        }
}

andi = new Person("Andi",25,"Pria");
romeo = new Person("Romeo",30,"Pria");
livia = new Person("Livia",23,"Wanita");

console.log(andi.nama)
andi.kenalan();
