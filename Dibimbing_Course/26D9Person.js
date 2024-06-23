const PERSON_STATUS = {
    BUYER : "BUYER",
    SELLER : "SELLER"
}

class Person{
    constructor(name, inputtedType){
        this.name = name;
        let type = inputtedType;

        this.getType = function(){
            return type;
        }
    }
}

class Buyer extends Person{
    constructor(name){
        super(name, PERSON_STATUS.BUYER)
    }

    buyGood(goods){
        goods.buy(this);
    }
}

class Seller extends Person{
    constructor(name){
        super(name, PERSON_STATUS.SELLER);
    }
}