let counter = 0

function dosomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            counter = counter +1
            resolve(`x value ${x} counter:${counter}`)
        }, 1000)
    });
    }
    async function  output (x){
        console.log(`ready ${x} counter: ${counter}`);
  
        const var1 = await dosomething(x);
        console.log(var1);
    }   
for(let i=1; i<= 10; i++){
 output(i) }