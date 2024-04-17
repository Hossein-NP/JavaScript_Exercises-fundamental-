'use strict';

let allPrice = 0;

for(let i = 1; i <= 5; i++) {
  allPrice = allPrice + +prompt(`Enter Product ${i} Price:` , '');
}
console.log(`All Price = ${allPrice}`);