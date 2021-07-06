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
 * @Time n*m*m
 * @Space m
 * @return null|array
 */

const howSum = (targetSum, numbers, memo = {}) => {
    const key = targetSum;
    if (key in memo) {
        return memo[key];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[key] = [...remainderResult, num];
            return  memo[key];
        }
    }
    memo[key] = null;
    return memo[key];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(howSum(7, [2,3]));
console.log(howSum(7, [5,3,4,7]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [7,14]));