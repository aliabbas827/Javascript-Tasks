let age = prompt("Enter your age")

let ageNum = Number(age);

var message;

if (ageNum >= 21){
    message = console.log("confirm entry to a venue and the ability to purchase alcohol");
}
else if (ageNum >= 19){
    message =console.log("confirm entry to the venue but deny the purchase of alcohol");
}
else{
    message =console.log("deny entry");
}
