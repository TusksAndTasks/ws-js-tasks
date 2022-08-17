function shallowEquals(obj1, obj2){
    let isEqual = true;

    Object.keys(obj1).forEach((key) => {
        if(obj1[key] !== obj2[key]){
            isEqual = false
        }
    })

    return isEqual;
}
