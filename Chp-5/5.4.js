let myTable = []

let rows = 4;
let columns = 3;




for(let i = 1; i <= rows; i++){
   let tempTable = []
   
    for( let counter = 0; counter <= columns; counter++ ){
       tempTable.push(1);
       
    }  
   
    myTable.push(tempTable)
}

console.table(myTable);

 
