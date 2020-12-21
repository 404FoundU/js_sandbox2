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
 * @return boolean
 */

const canConstruct = (target, wordBank, memo = {}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return true;
    }
    if (target.length === null) {
        return false;
    }
    let remainder = null;
    for (let word of wordBank) {
        let index = target.indexOf(word);
        if (index === 0) {
            const suffix = target.slice(word.length);
             remainder = canConstruct(suffix, wordBank, memo);
            if (remainder === true) {
                memo[key] = true;
                return memo[key];
            }
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
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));
