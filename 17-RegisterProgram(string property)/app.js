'use strict';

let userName = prompt('Enter Your User Name:','');
let userPassword = prompt('Enter Your User Password:','');

let calcUserNameLength = userName.length;
let calcUserPassLength = userPassword.length;
alert(`user name length: ${calcUserNameLength}\n password length: ${calcUserPassLength}`);

calcUserNameLength < 3 || calcUserPassLength < 8 ? console.log(`نام کاربری شما حداقل باید 3 کاراکتر و پسورد هم حداقل 8 کاراکتر باشد.`) : console.log(`ثبت نام شما با موفقیت انجام شد.`);
