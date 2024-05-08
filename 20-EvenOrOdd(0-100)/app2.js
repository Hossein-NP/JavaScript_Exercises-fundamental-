'use strict';

let userNum_1 = +prompt('Enter Your First Number:','');
let userNum_2 = +prompt('Enter Your Second Number:','');

if (userNum_1 < userNum_2 && userNum_1 % 2 === 0 && userNum_2 % 2 === 0) {
  while (userNum_1 <= userNum_2) {
    console.log(userNum_1);
    userNum_1 += 2;
  }
}
else if (userNum_1 < userNum_2 && userNum_1 % 2 != 0 && userNum_2 % 2 != 0) {
  console.log(userNum_1);
  userNum_1 += 2;
  while (userNum_1 <= userNum_2) {
    console.log(userNum_1);
    userNum_1 += 2;
  }
}