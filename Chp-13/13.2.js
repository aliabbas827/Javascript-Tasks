const promise = new Promise ((resolve, reject)=>{
    resolve(`Start counting`)
})

.then(value =>{
    console.log(value);
    return `One`;
})
.then(value =>{
    console.log(value);
    return `two`;
})
.then(value =>{
    console.log(value);
    return `Three`;
})
.then(value =>{
    console.log(value);
})