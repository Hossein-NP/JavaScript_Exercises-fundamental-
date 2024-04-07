'use strict';

let userName = prompt('نام کاربری خود را وارد کنید.'); //enter user name
let userPassword = prompt('رمز عبور خود را وارد کنید.'); //enter password

if(userName.length < 3 || userPassword.length < 5) {
  alert(`نام کاربری شما یا پسورد مجاز نمی باشد.نام کاربری حداقل 3 کاراکتر و پسورد 5 کاراکتر باشد.`);
}
else if(userName.toLocaleLowerCase() == 'ali' && userPassword.length >= 5) {
  alert(`شما با موفقیت وارد شدید.`);
}
else {
  alert(`شما مجاز به ورود نیستید.`);
}
