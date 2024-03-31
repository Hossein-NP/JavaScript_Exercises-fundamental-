'use strict';

let bill = +prompt('Your Bill :' , '');
let tip;
let finalBill;

(bill >= 50 && bill <= 300) ? tip = bill * 0.15 : tip = bill * 0.2;
finalBill = bill + tip;

console.log(`Your Bill = ${bill}\nFinalBill = ${finalBill}\nTip = ${tip}`);