// Tip: Use Cmnd + / or Ctrl + / to comment/uncomment a unit/block of code
// Don't sweat it if you confuse take a look at the resolve coding challenge, best good luck :)

////////////////////////////////////
// --- Coding Challenge #1 ---

// --- Directions
// Given an variable n an integer, console logs a string where:
// n === "FizzBuzz" if i is divisible by 3 and 5.
// n === "Fizz" if i is divisible by 3.
// n === "Buzz" if i is divisible by 5.
// if none of the above conditions are true console log the n.
// Hint: Use remainder (%) operator

// --- Examples
// "FizzBuzz" // n = 15
// "Fizz" // n = 3
// "Buzz" // n = 5

// Write your code here
// Using If/Else Statement
// const n = 15;

// if (n % 3 === 0 && n % 5 === 0) { // Is the number a multiple of 3 and 5?
//   console.log('FizzBuzz');
// } else if (n % 3 === 0) { // Is the number a multiple of 3?
//   console.log('Fizz');
// } else if (n % 5 === 0) {
//   console.log('Buzz');
// } else {
//   console.log(n);
// }

// Using Switch Statement
// const n = 3;

// switch (true) {
//   case n % 3 === 0 && n % 5 === 0:
//     console.log("FizzBuzz");
//     break;
//   case n % 3 === 0:
//     console.log("Fizz");
//     break;
//   case n % 5 === 0:
//     console.log("Buzz");
//     break;
//   default:
//     console.log(n);
// }

////////////////////////////////////
// --- Coding Challenge #2 ---

// --- Directions
// Write a program that console log each number from 1 to n.
// For each multiple of 3, console log "Fizz" instead of the number.
// For each multiple of 5, console log  "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, console log  "FizzBuzz" instead of the number.
// if none of the above conditions are true console log the number.
// Hint: Use remainder (%) operator

// --- Examples
// 1
// 2
// fizz
// 4
// buzz
// ...

// Write your code here
const n = 15;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Is the number a multiple of 3 and 5?
    console.log('FizzBuzz');
  } else if (i % 3 === 0) { // Is the number a multiple of 3?
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
