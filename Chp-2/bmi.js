let height_inches = prompt("Enter height in inches")
let weight_pounds = prompt("Enter weight in pounds")

let height_centi_meters;
let weight_kilos;

height_centi_meters = height_inches*2.54
weight_kilos = weight_pounds* 0.454

console.log(`Height in centimeters: ${height_centi_meters} cms`);
console.log(`Weight in kilos: ${weight_kilos} kilos`);

let height_meters;

height_meters = height_centi_meters / 100;
console.log(`${height_meters}`);

let bmi;
 
bmi = weight_kilos / (height_meters ** 2)

console.log(`Your BMI : ${bmi}`);