
const countConstruct = (target, wordBank, memo = {}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return 1;
    }
    let total = 0;
    for (const word of wordBank) {

        let index = target.indexOf(word);
        if (index === 0) {
            let suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordBank, memo);

            total += numWays;

        }
    }
memo[key] = total
    return total;

};


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('purple', ['purp', 'le', 'p', 'ur', 'purpl']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));