import { Person } from "./30D11Export.js";
import fh from "./30D11Export.js"

class Seller extends Person{
    constructor(name, age, gender){
        super(name, age, gender);
    }

    callSeller(){
        console.log(`Hallo my name is ${this.name}. I'm ${this.age} years old`);
    }
}

const fahmi = new Seller("fahmi",25,"Man");
console.log(fahmi.name);
console.log(fahmi.age);
console.log(fahmi.gender);

console.log(`Halo nama saya ${fh.nama}`)
fahmi.callSeller();
