async function promiseStack(functions, amount){
    const promiseChunksArray = []

    for(let i = 0; i < functions.length; i += amount){
        promiseChunksArray.push(functions.slice(i, i + amount));
    }

    for(let i = 0; i < promiseChunksArray.length; i++){
        await Promise.all(promiseChunksArray[i].map((promise) => promise()));
    }

}

async function asyncTimeout(timeout){
    await new Promise((resolve) => setTimeout(resolve, timeout))
}

promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
], 2);