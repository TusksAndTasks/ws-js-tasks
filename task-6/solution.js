function treeSearch(treeStructure, searchParam){
   const children = treeStructure.children;

   if(treeStructure.node === searchParam){
       return treeStructure.node
   }

   if(children.length > 0){
       for(let i = 0; i < children.length; i++){
           const result = treeSearch(children[i], searchParam)
           if( result > -1){
               return result;
           }
       }
   }
   return -1
}


const tree = {
    node: 1,
    children: [
        {
            node: 2,
            children: [
                {
                    node: 3,
                    children: [
                        {
                            node: 4,
                            children: [
                                {
                                    node: 5,
                                    children: [],
                                },
                                {
                                    node: 6,
                                    children: [],
                                },
                                {
                                    node: 7,
                                    children: [],
                                },
                                {
                                    node: 8,
                                    children: [],
                                },
                            ],
                        },
                        {
                            node: 9,
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            node: 10,
            children: [
                {
                    node: 11,
                    children: [
                        {
                            node: 12,
                            children: [],
                        },
                    ],
                },
                {
                    node: 13,
                    children: [],
                },
                {
                    node: 14,
                    children: [],
                },
            ],
        },
    ],
};

console.log(treeSearch(tree, 11));
console.log(treeSearch(tree, 1));
console.log(treeSearch(tree, 25));