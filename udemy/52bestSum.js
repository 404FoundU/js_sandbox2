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

const bestSum = (targetSum, numbers, memo = {}) => {
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
    let shortestCombination = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
            memo[key] = shortestCombination;
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
console.log(bestSum(7, [2,3]));
console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(300, [7,14]));