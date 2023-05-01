let arr =[]
let num = 0
for(let i=0;i<=9;i++){
    arr.push(num+=2)
}
console.log(arr);

for(let number of arr){
    console.log(number)
}