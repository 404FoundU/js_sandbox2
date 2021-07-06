const duplicates = (...params) => {
    if (params.length < 2) {
        return false;
    }
    let freqCount = [];
    for (let num of params) {
        if (num in freqCount) {
            return false;
        }
        freqCount[num] = freqCount[num] ? freqCount[num] + 1 : 1;
    }

    return true;
};
console.log(duplicates(1, 2, 3));
console.log(duplicates(1, 2, 2));