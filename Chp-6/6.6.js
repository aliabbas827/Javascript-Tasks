let argument = prompt(`Enter a number to find it's factorial`)


function factorial(argument){
    if(argument===0){
        return 1
    }
    else{
        return argument*factorial(argument -1)
    }
}

console.log(factorial(argument))