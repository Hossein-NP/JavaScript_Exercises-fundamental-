'use strict';

let number = +prompt('Enter Number:' , '');
let numberDigits = 0;

if (number == 0) {
  numberDigits = 1;
}else {
  for (let i = 0; (number / 10) != 0; i++) {
    numberDigits++;
    number = Math.floor(number / 10);
  }
}

console.log(`number digits = ${numberDigits}`);