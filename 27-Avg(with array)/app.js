'use strict';

let dataSet = [];
let i = 1;
let inputs = null;

while(i > 0) {

  inputs = +prompt("Enter Your Number:" , 'Other than zero (0)');
  dataSet.unshift(inputs);
  if(inputs == 0) {
    dataSet.shift(0);
    break
  }
  i++;
}
console.log(dataSet);

let sum = 0;
let j = 0;

for(j = 0; j <= dataSet.length-1; j++) {
  sum += dataSet[j];
}
console.log(`sum = ${sum}`);

let avg = sum / (dataSet.length);
console.log(`avg = ${avg}`);