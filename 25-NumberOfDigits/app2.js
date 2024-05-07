'use strict';

let userNumber = +prompt('Enter Number:' , '');
let sum = 0;
let count = 0;

while(userNumber / 10 != 0) {
  sum += userNumber % 10;
  count++
  userNumber = Math.floor(userNumber / 10);
}
console.log(`sum of digits: ${sum}\ncount of digits: ${count}`);