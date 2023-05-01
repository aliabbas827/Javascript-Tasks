let fullname = []
function greet(fullname){
   for(let i=0; i< fullname.length; i++){
    console.log(fullname [i]);}
}

function cfunc(string,callback){
    fullname = string.split(" ")
    callback(fullname)
}

cfunc("My name is Ali Abbas", greet)