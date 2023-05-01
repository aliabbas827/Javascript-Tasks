let output_arr = []
let value = 10

for(let i =0 ; i<=value; i++)
{
    let row = i 
    let temp = []
   
  for(let j = 0; j<=value; j++){
        let column = j
        let result = row*column 
        temp.push(result)
    }
    output_arr.push(temp)
}

console.table(output_arr)