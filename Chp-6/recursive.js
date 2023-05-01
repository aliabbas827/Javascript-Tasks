let Num = prompt(`Enter a number below 10`)
 let num = Number(Num)
function doRecurcive(num){
    if(num <= 10){
        console.log(num);
       return doRecurcive(num + 1)
    }
    else{
        console.log(`Value reached the limit`);
    }
}

doRecurcive(num)