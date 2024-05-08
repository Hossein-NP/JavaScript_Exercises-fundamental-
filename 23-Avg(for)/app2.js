'use strict';

let sum = 0;
let input = 0;
let counter = 1;
let flase = -1;

while (counter) {
  input = +prompt(`Enter Your ${counter} Number:`);
  if (input === -1) {
    break;
  }
  sum += input;
  counter++;
}

let avg = sum / (counter - 1) ;
console.log(avg);