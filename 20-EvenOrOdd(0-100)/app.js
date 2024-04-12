'use strict';

// even and odd numbers

for(let i = 0; i <= 100; i++) {
  
  let result = i % 2;
  if(result == 0) {
    console.log(`Even: ${i}`);
  }
  else {
    console.log(`Odd: ${i}`);
  }
  
}

// just even numbers

for(let i = 0; i <= 100; i += 2){
  console.log(`Even: ${i}`);
}

// just odd numbers

for(let i = 1; i < 100; i += 2){
  console.log(`Odd: ${i}`);
}