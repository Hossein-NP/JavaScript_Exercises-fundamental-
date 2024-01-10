//bmi computing program
//It should be noted that in the above formula, weight should be in kilograms (Kg) and height should be in meters (m).


// receive weight and height person one
let personOneHeight , personOneWeight;
personOneHeight = +prompt('Please Enter Height For Person One (m):');
personOneWeight = +prompt('Please Enter Weight For Person One (kg):');

// receive weight and height person Two
let personTwoHeight , personTwoWeight;
personTwoHeight = +prompt('Please Enter Height For Person Two (m):');
personTwoWeight = +prompt('Please Enter Weight For Person Two (kg):');

let BmiPersonOne , BmiPersonTwo;
BmiPersonOne = personOneWeight / (personOneHeight**2);
BmiPersonTwo = personTwoWeight / (personTwoHeight * personTwoHeight);

alert(`BmiPersonOne = ${BmiPersonOne}\nBmiPersonTwo = ${BmiPersonTwo}`);