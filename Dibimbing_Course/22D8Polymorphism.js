class smartPhone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    makeCall(){
        console.log(`anda melakukan panggilan`)
    }

    videoCall(){
        console.log("anda sedang melakukan video call")
    }

    sharingData(){
        alert("belum terdapat fitur sharing data")
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
    
    videoCall(){
        console.log("anda sedang melakukan faceTime")
    }
}

const iphone13 =  new Iphone("Iphone13");
const smartPhoneV2 = new smartPhone("Samsung", "Galaxy")

smartPhoneV2.makeCall();

iphone13.makeCall();
console.log(iphone13.unlock());

smartPhoneV2.videoCall();
iphone13.videoCall();

// smartPhoneV2.sharingData();