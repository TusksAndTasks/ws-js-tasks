function fromArrayToObject(array){
    const object = {};

    array.forEach((prop) => {object[prop.name] = prop.value})

    return object
}

function fromObjectToArray(object){
    const array = [];

    Object.entries(object).forEach((entry) => {
        array.push({name: entry[0], value: entry[1]})
    })

    return array
}
