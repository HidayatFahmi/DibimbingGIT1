// let arrayBuah = ["mango","apple","orange","grape"];
// let indexApple = arrayBuah.indexOf("apple");
// console.log(indexApple);

// ==== latihan no 1

let arrayNumber = [1,2,1,4,5,6,7,8,9,0,7,6,34,45,12,23,77];

const findLengthArray = (data) => {
    let panjangArray = 0;

    for(let a=0;a>=0;a++){
        if(arrayNumber[a] != undefined){
            panjangArray++;
        }
        else{
            break;
        }
    }
    return panjangArray;
}

console.log(findLengthArray(arrayNumber))

// ==== latihan no 2

let arrayNumber2 = [1,2,3,4,5,4,3,5,6,7,5,87,5,7,5,4,3,6,7,5,4,1];
let number = 1;

const findSpecifiedNumber = (array, searchNumber) => {
    let jumlahHuruf = 0;

    for(let a=0;a<=array.length;a++){
        if(array[a] == searchNumber){
            jumlahHuruf++;
        }
    }
    return jumlahHuruf;
}

console.log(`banyaknya nomor "${number}" = `,findSpecifiedNumber(arrayNumber2, number))

// ==== latihan no 3

let data = ["nol","satu","dua","tiga","empat","lima","enam","tujuh", "delapan","sembilan", "sepuluh"];

const customSlice = (data, start, end) => {
    let arrayPenampung = [];

    for(let i=start;i<=end;i++){
        if(data[i] != undefined){
            arrayPenampung.push(data[i]);
        }
        else{
            break;
        }
    }
    return arrayPenampung;
}

console.log(customSlice(data, 1, 5));
console.log(customSlice(data, 3, 20));
console.log(customSlice(data, 3, 5));
let slicingData = data.slice(0,7);
console.log(slicingData);
console.log("slicingData = ",slicingData);
console.log(`data adalah =`,data);



