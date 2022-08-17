function pipe(...functions){
    return (value) => functions.reduce((result, func) => func(result), value)
}