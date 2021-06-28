
const canConstruct = (target, wordBank, memo = {}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return true;
    }
    for (const word of wordBank) {

        let index = target.indexOf(word);
        if (index === 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[key] = true;
                return memo[key];
            }
        }
    }
    memo[key]=false;
    return memo[key];

};


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));