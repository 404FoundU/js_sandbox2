const canSum = (targetSum, arr, memo ={}) => {
    let key = targetSum;
    for ( key in memo) {
        return memo[key];
    }
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (let num of arr) {
        const remainder = targetSum - num;
        if (canSum(remainder, arr, memo) === true) {
            memo[key] = true;
            return true;
        };
    }
    memo[targetSum] = false;
    return false;
};
canSum(7, [5, 3, 4, 7]);