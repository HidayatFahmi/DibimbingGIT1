let arrayNumber = [23,45,67,4,1,87,88,90,23,54];

const urutKecilBesar = (arrayNomor) => {

    for(let out=0;out<=arrayNomor.length;out++){
        for(let inside=out+1;inside<=arrayNomor.length;inside++){
            if(arrayNomor[inside]<arrayNomor[out]){

                [arrayNomor[out],arrayNomor[inside]] = [arrayNomor[inside], arrayNomor[out]];
            }
        }
    }

    return arrayNumber;
}

console.log(urutKecilBesar(arrayNumber));

// ============= cara 2
let arrayNomor2 = [];

const pushArray = () => {
    for(let a=0;a<10;a++){
        let angka = (Math.random()*20);
        angka = Math.ceil(angka);
        arrayNomor2.push(angka);
    }

    return arrayNomor2;
}

const sortArray2 = (arrayNomor2) => {
    for(let out=0;out<arrayNomor2.length;out++){
        for(let inside=out+1;inside<=arrayNomor2.length;inside++){
            if(arrayNomor2[inside]<arrayNomor2[out]){
                [arrayNomor2[out],arrayNomor2[inside]] = 
                [arrayNomor2[inside],arrayNomor2[out]];
            }
        }
    }
    return arrayNomor2;
}

console.log(pushArray());
console.log(`array nomor 2 sebelum di sort :`, arrayNomor2);
sortArray2(arrayNomor2);
console.log(`array nomor 2 setelah di sort :`, arrayNomor2);

// ============= cara 3
let arrayNumber3 = [5,32,323,45,767,23,1,45,3,6,7,9];

const urutKecilBesar3 = (arrayNomor3) => {
    for(let a=0 ;a<=arrayNomor3.length;a++){
        for(let b=a+1;b<=arrayNomor3.length;b++){
            if(arrayNomor3[b]<arrayNomor3[a]){
                let temp = arrayNomor3[a];
                arrayNomor3[a] = arrayNomor3[b];
                arrayNomor3[b] = temp;
            }
        }
    }
    return arrayNomor3;
}

console.log(`cara 3 : `,urutKecilBesar3(arrayNumber3));


// ============= cara 4
let arrayNumber4 = [5,32,323,45,767,23,1,45,3,6,7,9];

const sortArray4 = (arrayNomor) => {
    let afterSort = arrayNomor.sort((a,b) => a - b);
    arrayNumber4=afterSort;
    return arrayNumber4
}

sortArray4(arrayNumber4);
console.log(`setelah di sort dengan cara 4 : `,arrayNumber4);

// ============= cara 5
let arrayNumber5 = [3,4,5,6,23,4,232,454,22,4565,3224,65,34,7,8];

const sortBesarKecil = (arrayNomor) => {
    for(let out=0;out<arrayNomor.length;out++){
        let afterIritated = arrayNomor.length - out;

        for(let inside=out+1;inside<=arrayNomor.length;inside++){
            if(arrayNomor[out]<arrayNomor[inside]){
                let temp = arrayNomor[out];
                arrayNomor[out] = arrayNomor[inside];
                arrayNomor[inside] = temp;
            }
        }
    }
    return arrayNomor;
}

console.log(`Besar kecil :`,sortBesarKecil(arrayNumber5));