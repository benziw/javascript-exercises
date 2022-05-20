const palindromes = function (str) {
    
    const helper = function(s){
        if(s.length < 2){
            return true;
        }
        else if(s[0] != s[s.length - 1]){
            return false;
        }
        else{
            return palindromes(s.slice(1, s.length-1));
        }
    }

    const lowerstr = str.toLowerCase();
    const cleanstr = lowerstr.replaceAll(/[^A-Za-z0-9]+/g,"");
    //console.log(cleanstr);

    return helper(cleanstr);
};

// Do not edit below this line
module.exports = palindromes;
