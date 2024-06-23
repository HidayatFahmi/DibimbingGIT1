const tukarBesarKecil = (kata) => {
    splitKata = kata.split('');
    let penampungKata = [];
    console.log(splitKata);

    for(let a=0;a<splitKata.length;a++){
        if(splitKata[a] == splitKata[a].toUpperCase()){
            penampungKata.push(splitKata[a].toLowerCase());
            // console.log(splitKata[a]);
        }
        else{
            penampungKata.push(splitKata[a].toUpperCase());
        }
    }
    return penampungKata.join('');
}

console.log(tukarBesarKecil("heLLo FahMi"));

// cara 2


function turnWords(kata){
    let result = ''

    for(let huruf of kata){
        result += huruf == huruf.toLowerCase() ? huruf.toUpperCase() : huruf.toLowerCase(); 
    }
    return result;

}

console.log(turnWords("faHMI HidAyaT"));
console.log(turnWords("Really lropp"));
console.log(turnWords("JKDSDJ jkoeoJJ"));