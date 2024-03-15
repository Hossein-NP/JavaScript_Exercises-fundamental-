'use strict';

let number_1 = +prompt('Enter Your First Number:','');
let number_2 = +prompt('Enter Your Second Number:','');
let number_3 = +prompt('Enter Your Third Number:','');
let average = (number_1 + number_2 + number_3) / 3;

console.log(`
    First Number = ${number_1}\n
    Second Number = ${number_2}\n
    Third Number = ${number_3}\n\n
    Average Numbers = ${average}
`);