let max_val = 5;
let number = Math.floor(Math.random() * 5)+1


let track = false;

while(track == false){
    let user = prompt("Enter a number between 1 and 5")
    let user_num = Number(user)

    if (user_num === number)
    {
        console.log("Your guess was correct.")
        track = true
    }
    else if(user_num > number)
    {
        console.log("Your guess was high. Try again.");
    }
    else if(user_num < number){
        console.log("Your guess was low. Try again.");
    }
}