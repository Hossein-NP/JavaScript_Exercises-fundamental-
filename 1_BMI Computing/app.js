//bmi computing program
//It should be noted that in the above formula, weight should be in kilograms (Kg) and height should be in meters (m).


let aliWeight = 78;
let aliHeight = 1.69;

let rezaWeight = 92;
let rezaHeight = 1.95;

let aliBmi = aliWeight / (aliHeight**2);
let rezaBmi = rezaWeight / (rezaHeight*rezaHeight);
console.log(`aliBmi = ${aliBmi}\nrezaBmi = ${rezaBmi}`);

let aliHeigherBmi = aliBmi > rezaBmi;
console.log(`aliheigherbmi = ${aliHeigherBmi}`);