// fuction expression

let getSquare = function square (number){
    return number*number;
}

console.log(getSquare(8));

// rekursif function

function loop (x){

    if(x>=10)return;
    console.log(x);
    loop(x+1);
}

loop(0)

// fibonacci dengan rekursif

function fibonacci (num){
    if(num < 2){
        return num;
    }
    else{
        return (fibonacci(num-1)+fibonacci(num-2))
    }
}

console.log(fibonacci(6));