'use strict';

let aliWeight = +prompt('Enter ali weight :','');
let aliHeight = +prompt('Enter ali height :','');
let rezaWeight = +prompt('Enter reza weight :','');
let rezaHeight = +prompt('Enter reza height :','');

let aliBmi = aliWeight / (aliHeight**2);
let rezaBmi = rezaWeight / (rezaHeight**2);

if (aliBmi > rezaBmi) {
  console.log(`Ali’s BMI is Higher Than Reza`);
  console.log(`Ali’s BMI (${aliBmi}) Is Higher Than Raza’s BMI (${rezaBmi})`);
}else {
  console.log(`Reza’s BMI is Higher Than Ali`);
  console.log(`Reza’s BMI (${rezaBmi}) Is Higher Than Ali’s BMI (${aliBmi})`);
}