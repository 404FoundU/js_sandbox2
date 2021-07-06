const canConstruct = (target, arr) =>{
    const table = Array[target + 1].fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of arr) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}