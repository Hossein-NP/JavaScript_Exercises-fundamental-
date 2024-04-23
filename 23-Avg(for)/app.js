'use strict';

let avg;
let numbers = null;

for(let i = 0; i < 5; i++) {
  numbers += +prompt(`Enter Number ${i + 1} :`,'');
}
avg = numbers / 5;
console.log(`AVG = ${avg}`);