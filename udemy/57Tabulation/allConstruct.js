const allConstruct = (target, arr) => {
    const table = Array[target + 1]
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let word of arr) {
                if (target.slice(i, i + word.length) === word) {
                    const comb = table[i].map(sub => [...sub, word]);
                    table[i + word.length].push(...comb);
                }

            }
        }
    }
    return table[target.length];
}