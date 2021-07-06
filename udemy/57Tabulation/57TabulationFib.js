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
const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];

    }


    return table[n];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));