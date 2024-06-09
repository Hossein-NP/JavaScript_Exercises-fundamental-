'use strict';

let number_1 = +prompt("Enter a number that reaches a power","0");
let number_2 = +prompt("Enter the power","0");
let result = 1;

for(let i = 1; i <= number_2; i++) {
    result *= number_1;
}
console.log(`Result = ${result}`);


// while loop
let j = 1;
let result_2 = 1;

while(j <= number_2) {
  result_2 *= number_1;
  j++;
}
console.log(`Result 2 = ${result_2}`);


// do while loop
let k = 1;
let result_3 = 1;

do {
  result_3 *= number_1;
  k++;
}while(k <= number_2)
console.log(`Result 3 = ${result_3}`);