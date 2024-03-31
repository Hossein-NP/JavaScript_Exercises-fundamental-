'use strict';

let userAge = +prompt('Enter Your Age :','18');
let gender = +prompt('Determine Your Gender :','female');

if(isNaN(gender) && gender === 'female' && userAge >= 18){

  alert(`Your 'gender' and 'Age' is confirmed , welcome`);

}else if(gender === 'male' || userAge < 18){

  alert(`Only women over the Age of 18 can enter the site.`);

}else{

  alert(`Your information is not verified.`);

}

