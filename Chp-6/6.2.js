let arr = ["Charming", "Aggresive","Breath taking", "Amazing"];

function askName(){
    let question = prompt("Enter a name");
    let value = arr[Math.floor(Math.random()*4)]
    console.log(question+" is "+value); 
}

askName();