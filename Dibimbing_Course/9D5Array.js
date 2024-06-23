let array1 = [1,"3","fahmi", true,null,[7,8,9]];
let array2 = [[3,[2,[9]]]]

console.log(array1[5][0])
console.log(array2[0][1][1][0])

// shallow copy dan deep copy 
myFirstArray = [1,"a",true,[]];
mySecondArray = myFirstArray;

console.log(`Sebelum dilakukan shallow copy`)
console.log(myFirstArray);
console.log(mySecondArray);
mySecondArray[1]="b";
console.log(`=== sesudah dilakukan shallow copy ===`);
console.log(myFirstArray);
console.log(mySecondArray);

myThirdArray = Array.from(mySecondArray);
console.log(`sebelum dilakukan deep copy`);
console.log(mySecondArray);
console.log(myThirdArray);
myThirdArray[1] = "c";
console.log("Sesudah dilakukan deep copy")
console.log(mySecondArray);
console.log(myThirdArray);

// Method Array
// 1. Push : menambhkan data pada index terakhir array
let number = [1,2,3,4,11];
console.log(number);
number.push(5)
console.log(number);

// 2.Pop : menghapus elemen pada index terakhir array
popNumber = number.pop();
console.log(popNumber)
console.log(number);

// 3. shift : menghapus data pada index pertama array
shiftNumber = number.shift();
console.log(shiftNumber);
console.log(number);

// 4. unshift : menambahkan data di awal index
console.log(number.unshift(9,1))
console.log(number);

// 5. slice : mengambil data dari index tertentu
let sliceNumber = number.slice(2,4);
console.log(sliceNumber);
console.log(number);

// concat : menggabungkan 2 array atau lebih
concatNumber = number.concat([3,4,5,6])
console.log(concatNumber)
console.log(number)

// reverse : membalikan urutan data pada array
console.log(number.reverse());
console.log(number);

// sort : mengurutkan array berdasaarkan klasifikasi
console.log(number.sort((a,b)=>(a-b)));
console.log(number);

// Index of : mencari index dari array tertentu
console.log(number.indexOf(11))

// find : mencari array dengan kondisi yang sesuai, tapi hanya pencarian pertama
console.log(number.find(num => num %2 === 0))

// filter : mencari data dan mengelompokannya sesuai dengan kondisi
console.log(number.filter(num => num % 2 == 0))

// map : melooping dan memodifikasi array 
console.log(number.map(num => num*2));

// reduce : terdir dari accumulator dan result
console.log(number.reduce((acc, num ) => acc+num, 0));


// find largest number

let number2 = [5,6,3,7,9,8];

function findLargestNumber(array){
    let largestNumber = 0;
    for(let a=0;a<number2.length;a++){
        if(number2[a]>largestNumber){
            largestNumber=number2[a];
        }
    }
    return largestNumber
}

console.log(findLargestNumber(number2))