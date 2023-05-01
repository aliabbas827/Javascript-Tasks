let var1 = 26;
let var2 = 77;

let opr = "/";
let result
function doMath(){
    if(opr === "+"){
        result = var1 + var2
        console.log(result);
    }
    else if ( opr === "-"){
        result = var2 - var1
        console.log(result);
    }
    else if ( opr === "*"){
        result = var2 * var1
        console.log(result);
    }
    else if ( opr === "/"){
        result = var1 / var2
        console.log(result);
    }
}

doMath()