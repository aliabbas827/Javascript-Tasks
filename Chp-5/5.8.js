// with continue
let output = "output:";
let number = 4;
for(let i=1; i<=10; i++){
    if(i === number){
        continue;
    }

   output = output + " " + i;
}

console.log(output);

//with break
let Output = "output:";
let NUMBER = 4;
for(let j=1; j<=10; j++){
    if(j === NUMBER){
        break;
    }

   Output = Output + " " + j;
}

console.log(Output);
