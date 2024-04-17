'use strict';

let redScore_1 = Math.random() * 100;
let finalRedScore_1  = Math.floor(redScore_1);

let redScore_2 = Math.random() * 1000;
let finalRedScore_2;
for(let i = 0; i < 20; i++){
  function trueFinalRedScore() {
    finalRedScore_2 = Math.ceil(redScore_2);
    return finalRedScore_2;
  }
  trueFinalRedScore();
  if(finalRedScore_2 == 100 && finalRedScore_2 <= 150) {
    break;
  }
}
let redScore_3 = Math.random() * 100;
let finalRedScore_3  = Math.floor(redScore_3);
console.log(`final red score 1 = ${finalRedScore_1}\tfinal red score 2 = ${finalRedScore_2}\tfinal red score 3 = ${finalRedScore_3}`);


let blueScore_1 = Math.random() * 1000;
let finalBlueScore_1;
// for(let i = 0; i < 20; i++){
//   function trueFinalScore() {
//     finalBlueScore_1 = Math.ceil(blueScore_1);
//     return finalBlueScore_2;
//   }
//   if (finalBlueScore_2 == 100 && finalBlueScore_2 <= 150) {
//     break;
//   }
// }
let blueScore_2 = Math.random() * 100;
let finalBlueScore_2 = Math.floor(blueScore_2);
let blueScore_3 = Math.random() * 100;
let finalBlueScore_3 = Math.floor(blueScore_3);

console.log(`final blue score 1 = ${finalBlueScore_1}\tfinal blue score 2 = ${finalBlueScore_2}\tfinal blue score 3 = ${finalBlueScore_3}`);