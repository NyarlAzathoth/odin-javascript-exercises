const removeFromArray = function(list, ...args) {
    let newList = [...list];
    let numOfSplices = 0;

    for (let i=0; i<list.length; i++) {
        for (let j=0; j<args.length; j++) {
            if (list[i] === args[j]) {
                newList.splice(i-numOfSplices, 1);
                numOfSplices++;
            }
        }
    }

    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
