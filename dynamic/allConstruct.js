
const allConstruct = (target, wordBank, memo = {}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return [[]];
    }
    const result = [];
    for (const word of wordBank) {

        let index = target.indexOf(word);
        if (index === 0) {
            let suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);

            const targetWays = suffixWays.map(way=> {
                return [word, ...way]
            })
            result.push(...targetWays)

        }
    }
memo[key] = result
    return result;

};


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('purple', ['purp', 'le', 'p', 'ur', 'purpl']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));