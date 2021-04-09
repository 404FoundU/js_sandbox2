const bestSum = (target, n) =>{
    const table = Array[target + 1].fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i] === null) {
            for (let num of n) {
                let el = [...table[i], num];
                if (!table[i + num] || el.length < table[i + num]) {
                    table[i + num] = el;
                }
            }
        }
    }
    return table[target];
}