/**
 * @Constraints
 * m target sum
 * n array length
 * 0<=el<=100 ( 0 is inclusive)
 * el can be used multiple times
 * @Ideas
 *binary search sum in array
 * @Time log n
 * @Space log n
 *
 * @Idea2
 *Recursive
 *
 * @Time m^n
 * @Space m
 *
 * @Idea2
 * Memoization
 *
 * @Time m*n
 * @Space m
 * @return boolean
 */

const canSum = (targetSum, numbers, memo = {}) => {

    const key = targetSum;
    if (key in memo) {
        return memo[key];
    }

    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = canSum(remainder, numbers, memo);


        if (remainderResult === true) {
            memo[key] = true;
            return memo[key];
        }
    }
    memo[key] = false;
    return memo[key];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));