let myCar = {
    name: "Corolla GLi",
    make: "Germany",
    model: 2021,
    color: "Black",
    value: 300000,
    AC: true,
    forSale: "Yes"
}

let variable = "color";

myCar[variable] = "White"
console.log(myCar);
 variable = "forSale"
 myCar[variable] = "No"
 console.log(myCar);

console.log(myCar.make , myCar.model);

console.log(myCar.forSale);

