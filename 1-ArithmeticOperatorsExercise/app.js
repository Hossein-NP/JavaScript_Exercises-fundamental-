'use strict';

let input_1 , input_2 , sum , multiplication , subtraction , division;

input_1 = +prompt('Enter Your First Number:','');
input_2 = +prompt('Enter Your Second Number:','');

sum = input_1 + input_2;
subtraction = input_1 - input_2;
multiplication = input_1 * input_2;
division = input_1 / input_2;

console.log(`sum = ${sum}\nsubtraction = ${subtraction}\nmultiplication = ${multiplication}\ndivision = ${division}`);