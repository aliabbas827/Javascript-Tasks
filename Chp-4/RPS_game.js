let ask = prompt("Enter a number: \n 0 for Rock \n 1 for Paper \n 2 for Scissors")

let number = Number(ask)

let c_number = Math.floor(Math.random() * 3)

if (c_number === 0 && number === 0){
    console.log("Computer choosed Rock \n User choosed Rock \n It's a Tie.");
}
else if (c_number === 0 && number === 1){
    console.log("Computer choosed Rock \n User choosed Paper\n User won.");
}
else if (c_number === 0 && number === 2){
    console.log("Computer choosed Rock \n User choosed Scissors \n Computer won.");
}
else if (c_number === 1 && number === 0){
    console.log("Computer choosed Paper \n User choosed Rock \n Computer won.");
}
else if (c_number === 1 && number === 1){
    console.log("Computer choosed Paper \n User choosed Paper \n It's a Tie.");
}
else if (c_number === 1 && number === 2){
    console.log("Computer choosed Paper \n User choosed Scissors \n User won.");
}
else if (c_number === 2 && number === 0){
    console.log("Computer choosed Scissors \n User choosed Rock \n User won.");
}
else if (c_number === 2 && number === 1){
    console.log("Computer choosed Scissor \n User choosed Paper \n Computer won.");
}
else if (c_number === 2 && number === 2){
    console.log("Computer choosed Scissor \n User choosed Scissor \n It's a Tie .");
}
