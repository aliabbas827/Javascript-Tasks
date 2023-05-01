let counter = 0;
let step = 5;
let track = false
 do{
    if(counter < 100){
        counter =counter + step;
        console.log(counter);
       }
       else{
        track = true;
       }
 }while(track == false)

