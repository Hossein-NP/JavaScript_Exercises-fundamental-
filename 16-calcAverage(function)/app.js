'use strict';

let input_1 = +prompt('input 1 :','');
let input_2 = +prompt('input 2 :','');
let input_3 = +prompt('input 3 :','');
let avg;

function calcAvg(num1 , num2 , num3) {
  avg = (num1 + num2 + num3) / 3;
  console.log(`Avg = ${avg}`);
}

calcAvg(input_1 , input_2 , input_3);