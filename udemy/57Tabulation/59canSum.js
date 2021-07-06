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
 * @Time n^m
 * @Space m
 * @return array
 */

// Tabulation
const canSum = (targetSum, n) => {
    const table = Array(targetSum + 1)
        .fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of n) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(canSum(7, [5,3,4]));
console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));