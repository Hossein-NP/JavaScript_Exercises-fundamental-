'use strict';

let number = +prompt('Enter Number:' , '');
let numberDigits = 0;

for (let i = 1; (number / 10) != 0; i++) {
  numberDigits = i;
  number = Math.floor(number / 10);
}

console.log(`number digits = ${numberDigits}`);