const removeFromArray = function(arr, ...args) {

    return arr.filter(x => args.indexOf(x) === -1);

};

// Do not edit below this line
module.exports = removeFromArray;
