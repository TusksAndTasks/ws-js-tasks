class MySet{
    constructor(values){
        if(Array.isArray(values)){
            this.setData = [...values];
        } else {
            throw new Error("данные некорректного типа")
        }
    }

    add(value){
        if(!this.has(value)){
            this.setData.push(value);
        }
        return this.setData
    }

    has(value){
        return this.setData.includes((elem) => elem === value)
    }

    delete(value){
        const filteredSet = this.setData.filter((elem) => elem !== value);
        return filteredSet.length !== this.setData.length;
    }

    clear(){
        this.setData = [];
    }

    get size(){
        return this.setData.length;
    }

}

