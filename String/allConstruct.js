const allConstruct = (target, wordBank, memo={}) => {
    let key = target;
    if (key in memo) {
        return memo[key];
    }
    if (target === '') {
        return [[]];
    }
    let data = [];
    for (let word of wordBank) {
        if (target.indexOf(word.length) === word) {
            let newTarget = target.slice(word.length);
            let suffixWays = allConstruct(newTarget, wordBank, memo);
            const targetWays = suffixWays.map(el=> [word,...el ]);
            data.push(...targetWays);
        }
    }
    memo[key] = data;
    return data;
};


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd','ef','c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));
