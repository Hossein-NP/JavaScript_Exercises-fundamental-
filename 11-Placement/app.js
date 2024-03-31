'use strict!';

let userRating = +prompt('Please Enter Your GPA :','18');

if(userRating < 1 || userRating > 20) {
  alert(`Your GPA invalid!`);
}

switch(userRating) {
  case 18:
  case 19:
  case 20:
    alert(`Your level is A`);
    break;

  case 17:
  case 16:
  case 15:
    alert(`Your level is B`);
    break;

  case 14:
  case 13:
  case 12:
    alert(`Your level is C`);
    break;
    
  default:
    alert(`You have been conditioned`);
}