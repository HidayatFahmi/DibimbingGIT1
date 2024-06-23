let cost = 2000;
let income = 4000;
let profit = 0;
let loss = 0;

if(income > cost){
    profit = income - cost;
    console.log(`profit = ${profit}`)
}
else{
    loss = cost - income;
    console.log(`loss = ${loss}`)
}