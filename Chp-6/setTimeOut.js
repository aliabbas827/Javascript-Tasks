let x1 = () =>{
    console.log(`One`);
    
}

let x2 = () =>{
    console.log(`Two`);
    
}

let x3 = () => {
    console.log(`Three`);
    x1();
    x2();
}

let x4 = ()=>{
 console.log(`Four`);
 setTimeout(x1, 1000)
 x3()
}

x4()