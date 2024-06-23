// question 
// 1. jumlahin array
// 2. angka paling besar, explore math.max, math.min
// 3. return array genap
// 4. menghitung jumlah huruf dari satu kata array
// 5. reverse array
// 6. return second smallest number of array
// 7. return each array that contain letter A

// ============== Number 1

// cara 1
let array1 = [1,2,4,5,6,3,2];
let total1 = 0;
let total2 = 0;
let total3 = 0;

function summingArray(deretAngka){
    for(let a=0;a<deretAngka.length;a++){
        total1+=deretAngka[a];
    }
    return total1;
}

console.log(summingArray(array1))

// cara 2

function summingArray2(deretAngka){
    for(angka of deretAngka){
        total2 += angka;
    }
    return total2;
}


console.log(summingArray2(array1));

// cara 3 dengan method

function summingArray3(deretAngka){
 total3 = deretAngka.reduce((a,b)=>a+b);
 return total3;
}

console.log(summingArray3(array1));

// ============== Number 2 find largest number

// cara 1

let array2 = [1,6,4,5,3,9,8,2,23,88,12,34,45];
let largestNumber = 0;

function findLargestNumber(deretAngka){
 for(angka of array2){
    if(largestNumber<angka){
        largestNumber=angka;
    }
 }
 return largestNumber;
}

console.log(findLargestNumber(array2))

// cara 2 dengan method

let largestNumber2 = array2[0];

function findLargestNumber2(deretAngka){
    largestNumber2 = Math.max(...deretAngka);
    return largestNumber2;
}
console.log(findLargestNumber2(array2))

// ============== Number 3 return array genap

// cara 1
let angkaGenap = [];

function findArrayGenap(deretAngka){
    for(angka of deretAngka){
        if(angka%2==0){
            angkaGenap.push(angka)
        }
    }
    return angkaGenap
}

console.log(findArrayGenap(array2));

// cara 2 dengan method find
let evenNumber = [];

function findEvenNumber(deretAngka){
 evenNumber = deretAngka.filter(num => num%2==0);

 return evenNumber;
}
console.log(findEvenNumber(array2));

// ============== Number 4, count letter contains in word

arrayNama = ["fahmi","hidayat","messi","Belitung","17"]
let sumLetter = [];

function filterSumLetter(deretKata){
    for(kata of deretKata){
        let jumlah = kata.length;
        sumLetter.push(jumlah);
    }
    return sumLetter;
}

console.log(filterSumLetter(arrayNama))

// ============== Number 5. reverse array

// cara 1
let array3 = [1,2,3,4,5,6,7,8];

function balikArray(deretArray){
    for(let i=0;i<=deretArray.length;i++){
        let maxId = i;

        for(let j=i+1;j<deretArray.length;j++){
            if(deretArray[j]>deretArray[i]){
                maxId = j;
                
                [deretArray[i],deretArray[maxId]] = [deretArray[maxId],deretArray[i]];
            }

        }

    }
    return deretArray;
}

console.log(balikArray(array3))

// cara 2dengan method reverse

let reverseResult = [];

function reverseArray(deretArray){
    reverseResult = deretArray.reverse();

    return reverseResult;
}

console.log(reverseArray(array3));

// ============== Number 6. secnd smallest number