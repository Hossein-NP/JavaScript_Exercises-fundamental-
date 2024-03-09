'use strict';

let input = +prompt('Please enter the desired number:','Identifying whether it is even or odd...');
let remaining = input % 2;

if(remaining == 0){
  alert(`Your input amount = ${input}\nremaining(${input}/2) = ${remaining} >> even`);
}else{
  alert(`Your input amount = ${input}\nremaining(${input}/2) = ${remaining} >> odd`);
}