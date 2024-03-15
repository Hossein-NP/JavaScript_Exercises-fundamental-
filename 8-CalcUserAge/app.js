//This exercise has several problems that are implemented only to learn the basic topics
'use strict';

let year_of_birth = +prompt('Enter Your Year Of Birthday:','example 1996') ;
if(isNaN(year_of_birth)){
  alert(`The year of birth is not valid. Please enter a valid number.`);
}else if(year_of_birth > 2024){
  alert(`Birth year is not valid`);
}else{
  alert(`Birth year is valid`);
}

let month_of_birth = +prompt('Enter Your Month Of Birthday:','example 5') ;
if(isNaN(month_of_birth)){
  alert(`The month of birth is not valid. Please enter a valid number.`);
}else if(month_of_birth > 12){
  alert(`month year is not valid`);
}else{
  alert(`Birth month is valid`);
}

let day_of_birth = +prompt('Enter Your Day Of Birthday:','example 30') ;
if(isNaN(day_of_birth)){
  alert(`The day of birth is not valid. Please enter a valid number.`);
}else if(day_of_birth > 2024){
  alert(`Birth day is not valid`);
}else{
  alert(`Birth day is valid`);
}

let resultYear = 2024 - year_of_birth;
let resultMonth = 12 - month_of_birth;
let resultDay = 31 - day_of_birth;

console.log(`Date Of Birth User = ${resultYear}.${resultMonth}.${resultDay}`);
