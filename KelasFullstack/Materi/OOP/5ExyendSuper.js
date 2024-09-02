class Kucing {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    makan(){
        return `${this.name} lagi makan`
    }
    cakar(){
        return `${this.name} just scratched`
    }
}

const loony = new Kucing("lonny", 5);
console.log(loony.makan())

class Animal{
    constructor(name, age){
        console.log("parent excecuted");
        this.name = name;
        this.age = age;
    }
}

class Cat extends Animal{
    constructor(name, age, lives){
        console.log("children excecuted")
        super(name, age);
        this.lives = lives;
    }
    meong(){
        return 'meong...';
    }
}

const lolo = new Cat("lolo",5);
console.log(lolo.name);
console.log(lolo.meong());