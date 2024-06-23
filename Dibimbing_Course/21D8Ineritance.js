class smartPhone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    makeCall(){
        console.log(`anda melakukan panggilan`)
    }
}

class Iphone extends smartPhone{
    constructor(model){
        super("Apple",model)
        this.faceId = true;
    }

    unlock(){
        return("face ID autentification successfull");
    }
}

const iphone13 =  new Iphone("Iphone13");
const smartPhoneV2 = new smartPhone("Samsung", "Galaxy")

smartPhoneV2.makeCall();

iphone13.makeCall();
console.log(iphone13.unlock());