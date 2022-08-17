function setProperty(pathArray, value, object){
    let propertyKey = pathArray.shift()
    if(pathArray.length > 0){
        object[propertyKey] = {};
        setProperty(pathArray, value, object[propertyKey]);
    } else {
        object[propertyKey] = value;
    }
}
