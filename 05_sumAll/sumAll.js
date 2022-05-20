const sumAll = function(a,b) {

    if (typeof(a) != "number" ||
         typeof(b) != "number" ||
         Math.floor(a) != a ||
         Math.floor(b) != b ||
         a < 0 ||
         b < 0
    ){
        return 'ERROR';
    }

    let low = Math.min(a,b)
    let high = Math.max(a,b);
    let i = low;
    let sum = 0;

    while(i < high + 1){
        sum += i;
        i++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
