'use strict';

let minute = +prompt('Enter Your Time(minutes):', 'example 40');
if(isNaN(minute)){
  alert(`The entered number is not valid.${minute}`);
}
else{
  alert(`The entered number is  valid.${minute}`);
}

let hour =  minute / 60;
console.log(`Hour = ${hour}H`);