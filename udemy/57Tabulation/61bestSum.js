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
const bestSum = (targetSum, n) => {
    const table = Array(targetSum + 1)
        .fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of n) {
                const newValue = [...table[i], num];
                if (!table[i + num]  || table[i + num].length > newValue.length ) {
                    table[i + num] = newValue;
                }
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
console.log(bestSum(7, [2,3]));
console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(300, [7,14]));