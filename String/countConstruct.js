const countConstruct = (target, wordBank) => {
    if (target.length === 0) {
        return 1;
    }
    let totalCount = 0;
    for (let word of wordBank) {
        let prefix = target.slice(0, word.length);
        if (prefix === word) {
            let newTarget = target.slice(word.length);
            let count = countConstruct(newTarget, wordBank);
            totalCount += count;
        }
    }
    return totalCount;

};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
