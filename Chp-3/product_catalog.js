let inventory = []

let item1 = {
    name: "Corolla Gli", model: 2021, cost: 3500000,
    quantity: 3
}
let item2 = {
    name: "Yamaha YBR125", model: 2022, cost: 410000,
    quantity: 10
}

let item3 = {
    name: "Honda cd125", model: 2019, cost: 200000,
    quantity: 20
}

inventory.push (item1, item2 , item3)
console.log(inventory);

console.log(inventory[2].quantity);