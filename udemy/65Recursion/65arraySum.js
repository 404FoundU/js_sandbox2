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
const arraySum = (array) => {
    return _sum(array, 0);
};
const _sum = (array, idx) => {
    if (idx === array.length) {
        return 0;
    }
    return array[idx] + _sum(array, idx + 1);
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
// console.log(arraySum([1, 5, 7, -2]));
const input = Array(9000).fill(1);
const start = Date.now();
console.log(arraySum(input));
const end = Date.now();
console.log(`Time: ${end - start}`);
