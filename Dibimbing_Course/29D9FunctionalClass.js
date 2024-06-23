function Person(name, age, status){
    this.name = name;
    this.age = age;
    this.status = status;

    this.callMe = function(){
        console.log(`Hello my name is ${this.name}, you can call me hidayat`);
    }
}

function footballPlayer(name, age, posisi){
    Person.call(this, name, age);

    this.posisi = posisi;
}

const fahmi = new Person("fahmi",25,"single");
const messi = new footballPlayer("Messi", 37, "Right Forward Winger");

console.log(fahmi.name);
console.log(fahmi.age);
console.log(fahmi.status);
console.log(fahmi.callMe());

console.log(messi.name);
console.log(messi.age);
console.log(messi.posisi);
console.log(messi.status);

// 2.50.59