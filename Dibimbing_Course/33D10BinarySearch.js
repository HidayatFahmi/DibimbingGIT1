let arrayNumber1 = [1,2,3,5,34,56,44,78,90,756,33,24,23,77,67];

const cariIndex1 = (arrayNomor, valueDicari) => {
    
    let sortedArray = arrayNomor.sort((a,b) => a-b);
    let indexAwal = 0;
    let indexAkhir = sortedArray.length-1;

    while(indexAwal < indexAkhir){
        let indexTengah = Math.floor((indexAwal + indexAkhir)/2);
        let nilaiTengah = sortedArray[indexTengah];
        console.log(`nilai tengah = `,nilaiTengah);

        if(nilaiTengah == valueDicari) return indexTengah;
        else if(nilaiTengah < valueDicari){
            indexAwal = indexTengah+1;
        }
        else if(nilaiTengah > valueDicari){
            indexAkhir = indexTengah-1;
        }
    }
    return -1;
}

console.log(`array nomor sebelum di sort`,arrayNumber1);
console.log(cariIndex1(arrayNumber1,90));
console.log(`array nomor setelah di sort`,arrayNumber1);