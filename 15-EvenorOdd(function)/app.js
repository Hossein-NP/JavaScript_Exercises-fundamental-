'use strict';

let input = +prompt('Enter Number :' , '');
let remain;

function evenOdd(number) {
  remain = input % 2;
  // if(remain == 0){
  //   console.log(`number(${input}) is Even.`);
  // }
  // else {
  //   console.log(`number (${input}) is Odd`);
  // }

  // Ternary operators
  (remain == 0) ? console.log(`number(${input}) is Even.`) : console.log(`number (${input}) is Odd`);
}

evenOdd(input);