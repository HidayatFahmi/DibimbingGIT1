const GOOD_STATUS = {
    AVAILABLE : "AVAILABLE",
    BOUGHT : "BOUGHT",
}

class Goods {
    constructor(name, seller){
        this.name = name;
        this.seller = seller;

        let status = GOOD_STATUS.AVAILABLE;
        let buyer;

        this.buy = function (goodBuyer){
            buyer = goodBuyer;
            status = GOOD_STATUS.BOUGHT;
        }

        this.getBuyer = function(){
            return buyer;
        }

        this.getStatus = () => {
            return status;
        }
    }
}



