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

const allConstruct = (target, wordBank, memo = {}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return [[]];
    }

    const result = [];
    for (let word of wordBank) {
        let index = target.indexOf(word);
        if (index === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);

        }
    }
    memo[key] = result;
    return memo[key];
};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd','ef','c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));
