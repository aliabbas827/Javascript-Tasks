let arr = []
arr.push("Milk", "Bread","Apples")
console.log(arr);

arr.splice(1,1, "Bananas", "Eggs")
console.log(arr);

arr.pop()
console.log(arr);

arr.sort()
console.log(arr);


console.log(arr.indexOf("Milk"));

arr.splice(1,0, "Carrots", "Lettuce")
console.log(arr);

let arr2 = ["Juice","Pop"]

let arr3 = arr.concat(arr2)
let arr4 = arr3.concat(arr2)



console.log(arr4.lastIndexOf("Pop"));

console.log(arr4);