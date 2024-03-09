'use strict';

let firstName , lastName , age;

firstName = prompt('Please Enter Your Name:','');
lastName = prompt('Please Enter Your LastName:','');
age = +prompt('Please Enter Your Age:','');

if(age <= 18){
  console.log('Hi '+firstName+' '+lastName+' You cannot participate in the festival'); // string concatenation method
  console.log('Hi '+firstName+' '+lastName+'\n'+'You cannot participate in the festival');

  console.log(`Hi ${firstName} ${lastName} You cannot participate in the festival`) // template literal method (Suggested)
}
else{
  console.log('Hi' + firstName + lastName + 'You can participate in the festival'); // string concatenation method
  
  console.log(`Hi ${firstName} ${lastName} You can participate in the festival`) // template literal method (Suggested)
}