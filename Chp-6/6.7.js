let var1 = 10
function doLoop(var1){
  console.log(var1);
  if(var1<1){
    return 0
  }
  else if(!(var1<1)){
    if(var1 > 0){ 
    return   doLoop(var1 - 1) }
  }

}

console.log(doLoop(var1));