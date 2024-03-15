'use strict';

let ageUser = +prompt('Enter your desired user age' , '');

if(ageUser < 18){
  alert(`You are not authorized to enter the site.`);
}else{
  alert(`You are authorized to enter the site.`);
}