const combination = (arr) => {
    if (arr.length === 0) {
        return [[]];
    }
    const firstEl = arr[0];
    const restEl = arr.slice(1);
    const combWithoutFirst = combination(restEl);
    const combWithFirst = [];
    combWithoutFirst.forEach(singleComb => {
        const singleCombWithFirst = [...singleComb, firstEl];
        combWithFirst.push(singleCombWithFirst);
    });
    return [...combWithFirst, ...combWithoutFirst];
};
console.log(combination(['a', 'b', 'c']));