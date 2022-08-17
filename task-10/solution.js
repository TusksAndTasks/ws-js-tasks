async function promiseStack(functions){
    for(let i = 0; i < functions.length; i++){
       await functions[i]();
    }
}

async function asyncTimeout(timeout){
    await new Promise((resolve) => setTimeout(resolve, timeout))
}

promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
]);