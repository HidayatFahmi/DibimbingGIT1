let student = [
    {name : 'andi', grade : 7.5},
    {name : 'dimas', grade : 6.0},
    {name : 'lita', grade : 8.2},
    {name : 'arda', grade : 5.0},
    {name : 'lila', grade : 6.5},
    {name : 'fahmi', grade : 9.3},
    {name : 'rui', grade : 6.9},
    {name : "reyhan", grade : 7.2}
]

let listPassStudent1 = [];
let listRankingStudent = [];
let listRankingStudent2 = [];

function cekPassStudent1(studentList){
    for(let std of studentList){
        if(std.grade >= 7.0){
        listPassStudent1.push(std.name);
        }
    }
    return listPassStudent1;
}

function cekRankingStudent(studentList){

    for(let a=0;a<studentList.length;a++){
        for(let b=a+1;b<studentList.length;b++){
            if(studentList[b].grade>studentList[a].grade){
                [studentList[a], studentList[b]] = [studentList[b],studentList[a]]
            }
        }
    }

    for(let c=0;c<studentList.length;c++){
        studentList[c].rangking = c+1;
    }
    return studentList
}

// 

function cekRankingStudent2(listStudent){
    let hasil = listStudent.filter(num => num.grade >= 7)

    return listRankingStudent2 = hasil;
}

console.log(cekPassStudent1(student));
console.log(cekRankingStudent(student))

console.log("============ dengan filter ===============")
console.log(cekRankingStudent2(student))

// ======================== Soal No 2 Check Anagram

let kata1 = "kamu";
let kata2 = "muka";
let kata3 = "kaum";
let kata4 = "maka";

const checkAnagram = (kata1, kata2) => {
    let sortKata1 = kata1.toLowerCase().split('').sort().join('');
    let sortKata2 = kata2.toLowerCase().split('').sort().join('');

    console.log(sortKata1)

    return sortKata1 == sortKata2;

}

console.log(checkAnagram(kata1,kata2));
console.log(checkAnagram(kata1,kata3));
console.log(checkAnagram(kata1,kata4));
console.log(checkAnagram(kata2,kata3));
console.log(checkAnagram(kata2,kata4));
console.log(checkAnagram(kata3,kata4));

// ======================== Soal No 3

let cart = [
    {store : "toko oke", item : "pulpen"},
    {store : "amanah elektronik", item : "tv"},
    {store : "yes tore", item : "casing hp"},
    {store : "amanah elektronik", item : "laptop"},
    {store : "toko oke", item : "buku tulis"},
    {store : "amanah elektronik", item : "gurita hp"},
    {store : "toko oke", item : "sapu"},
    {store : "toko oke", item : "gelas keramik"},
    {store : "yes tore", item : "gantungan kunci lucu"},
    {store : "toko oke", item : "kursi listrik"},
]

const groupingStore = (cartNya) => {
    let resultGroup = [];

    for(let eachStore of cartNya){
        let added = false;
        for(let i=0; i<resultGroup.length;i++){
            if (resultGroup[i].store === eachStore.store){
                resultGroup[i].items.push(eachStore.item)
                added = true;
                break;
            }
        }
        if(added == false){
            resultGroup.push({
                store : eachStore.store,
                items : [eachStore.item],
            })
        }
    }
    return resultGroup;
}

console.log(groupingStore(cart));