const fibonacci = function(num) {

    const helper = function(n){
        if(n === 0){
            return 0;
        }
        else if(n === 1){
            return 1;
        }
        else{
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    if(typeof(num) === "string"){
        num = parseInt(num);
    }
    if(num < 0){
        return 'OOPS';
    }

    return helper(num);

};

// Do not edit below this line
module.exports = fibonacci;
