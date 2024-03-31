'use strict';

let redScore_1 = 110;
let redScore_2 = 91;
let redScore_3 = 88;

let blueScore_1 = 89;
let blueScore_2 = 108;
let blueScore_3 = 96;

let redAverage = (redScore_1 + redScore_2 + redScore_3) / 3;
let blueAverage = (blueScore_1 + blueScore_2 + blueScore_3) / 3;

console.log(`Red Team Score Average = ${redAverage}\nBlue Team Score Average = ${blueAverage}`);

if(redAverage > blueAverage) {

  console.log(`The RED team is the winner`);

}else if(blueAverage > redAverage){

  console.log(`The BLUE team is the winner`);

}else{

  console.log(`Both Team Winner`);

}


if(redAverage >= 100 && redAverage > blueAverage){

  console.log(`The RED team is the winner`);

}else if(blueAverage >= 100 && blueAverage > redAverage){

  console.log(`The BLUE team is the winner`);

}else if (redAverage >= 100 && redAverage == blueAverage){

  console.log(`Both Team Winner`);

}else {

  console.log(`Neither team wins.`)

}