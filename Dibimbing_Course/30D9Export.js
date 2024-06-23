export class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        let genderNya = gender;

        this.getGender = () => {
            return genderNya;
        }
    }
}

const fahmiHidayat = {
    nama : "Fahmi Hidayat",
    umur : 25,
    asal : "Bangka Belitung"
}

export default fahmiHidayat