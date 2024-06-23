class footballPlayer{
    constructor(nama, umur, posisi){
        this.nama = nama;
        this.umur = umur;
        this.posisi = posisi;

        let istri ;

        this.setIstri = (istriPemain) => {
            istri = istriPemain;
        }

        this.getIstri = () => {
            console.log(`istri dati ${this.nama} adalah ${istri}`)
        }
    }

    kickFoot(){
        throw new Error('belum diimplementasikan')
    }

    specialSkill(){
        console.log(`keahlian dari ${this.nama} adalah freekick`)
    }
}


class Messi extends footballPlayer{
    constructor(nama, umur, posisi){
        super(nama, umur, posisi)
    }

    kickFoot(){
        console.log(`${this.nama} menendang bola dengan kaki kiri`);
    }

    specialSkill(){
        console.log(`${this.nama} memiliki special skil dribbling`);
    }

    kelemahan(){
        console.log(`${this.nama} tidak bisa deffence`)
    }

}

let ronaldo = new footballPlayer("ronaldo", 40, "LFW");
console.log(ronaldo.nama);
console.log(ronaldo.umur);
console.log(ronaldo.posisi);
// ronaldo.kickFoot();

let messi = new Messi("messi",37,"RFW");
console.log(messi.umur)
messi.setIstri("Antonela");
messi.getIstri();
messi.kickFoot();
messi.specialSkill();
messi.kelemahan();
