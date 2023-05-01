let prize = prompt("Enter number between 0 to 10")

let number  = Number(prize)

let message = "My Selection: "

let response

switch(number){
    case 1:
        response = console.log(message +  "you won a supra");
        break;
    case 2:
        response = console.log(message +  "you won a house");
        break;e
    case 3:
        response = console.log(message +  "you won a car");
        break;
    case 4:
        response = console.log(message +  "you won a plot");
        break;
    case 5:
    case 6:
        response = console.log(message +  "you won a bike");
        break;

    case 7:
    case 8:
        response = console.log(message +  "you won a gold brick");
        break;
    case 9:
    case 10:
        response = console.log(message +  "you won a cycle :)");
        break;
}