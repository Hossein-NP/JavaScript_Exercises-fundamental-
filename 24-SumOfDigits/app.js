'use strict';

let number = +prompt('Enter Number:' , '');
let sumDigits = 0;

for (let i = 0; (number / 10) != 0; i++) {
  sumDigits += number % 10;
  number = Math.floor(number / 10);
}

console.log(`sum digits = ${sumDigits}`);