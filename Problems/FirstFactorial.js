function FirstFactorial(num, memo = {}) {
    let key = num;
    if(key in memo){
        return memo[key];
    }

    if(num<=1){
        return 1;
    }

    // code goes here
    memo[num] = num * FirstFactorial(num-1, memo);
    return memo[num];
}

// keep this function call here
console.log(FirstFactorial(4));