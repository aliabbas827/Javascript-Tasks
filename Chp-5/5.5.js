let grid = []
let number_cell = 64
let counter = 0

let row = []
for(let i =0; i<=number_cell;i++){
  if(counter%8 ===0){
    if(row != undefined){
      grid.push(row)
    }
    row = null;
  }
counter++

}

console.table(grid);