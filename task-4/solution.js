Array.prototype.MyFilter = function(callback){
    const filteredArray = [];

    for(let index = 0; index < this.length; index++){
       let element = this[index];
       let array = this;
       if(callback(element, index, array)){
           filteredArray.push(element);
       }
   }

   return filteredArray;
}