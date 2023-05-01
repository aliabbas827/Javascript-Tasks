let car = {
    model: "Civic",
    make: "Honda",
    year: 2021,
    };

for(let properties in car){
    console.log(properties);
}

let arr = ["model","make","year"]

//with for loop

for(let i=0; i<=2;i++){
    console.log(arr[i])
}

//with for in loop

for(let prop in arr){
    console.log(prop);
} // it will only return indices, since these are the "keys" of the values of the arrays

//with for of loo(better way on arrays)

for(let prop of arr){
    console.log(prop);
}