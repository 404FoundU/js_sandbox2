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
const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[target.length];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));
