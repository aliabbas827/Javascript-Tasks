let myWork =[]
for(let i = 1 ; i<=10; i++){
  let obj = i%2 === 0? {name: `lesson ${i}`, status: true} : {name: `lesson ${i}`, status: false}
   myWork.push(obj)
   
}
console.log(myWork);