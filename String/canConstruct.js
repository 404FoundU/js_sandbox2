const canConstruct = (target,wordBank) => {
    if (target === '') {
        return true;
    }
    for (let word of wordBank) {
        let length = word.length;
        let prefix = target.slice(0, length);
        if (prefix === word) {
            let newTarget = target.slice(length);
            if (true === canConstruct(newTarget, wordBank)) {
                return true;
            };

        }
    }
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'cd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeeee']));
