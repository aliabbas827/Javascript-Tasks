let arr =[]
let result
for (let i =0 ; i<=9; i++){
    let val1 = i*5;
    let val2 = i*i;  
    doAddition(val1,val2)  
    arr.push(result)
}

function doAddition(x,y){
     result = x+y
    return result;
}

console.log(arr);