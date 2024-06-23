class smartPhone {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    makeCall(number){
        throw new Error("tidak bisa memanggil")
    }

    makeMessage(number, message){
        throw new Error("tidak bisa mengirim pesan")
    }
}

class Iphone extends smartPhone{
    constructor(model){
        super("Apple",model);
    }

    makeCall(number){
        console.log(`anda memanggil nomor ${number}`);
    }

    makeMessage(number, message){
        console.log(`${message} terkirim ke nomor ${number}`);
    }
}

const iphoneTen = new Iphone("iphone 10 Promax");
const smartPhoneV2 = new smartPhone("Samsung","Galaxy")

// console.log(smartPhoneV2.makeCall("342323"))
iphoneTen.makeCall("342323");
iphoneTen.makeMessage("90999399","Hallo salam kenal");