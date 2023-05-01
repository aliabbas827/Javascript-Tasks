let number = Math.floor(Math.random() * 6)

let ask = prompt("Enter a number between 0 to 5")

let ask_num = Number(ask)

if(ask_num < number){
    console.log(`${ask_num} is less than ${number}`);
}
else if (ask_num === number){
    console.log(`${ask_num} is equal than ${number}`);
}
else if(ask_num > number){
    console.log(`${ask_num} is greater than ${number}`);
}
