const moveZero = (arr) => {
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        let num = arr[windowEnd];
        if (num !== 0) {
            [arr[windowEnd], arr[windowStart]] = [arr[windowStart], arr[windowEnd]];
            windowStart++;
        }
    }
    return arr;
};
let r;
r = moveZero([0, 1, 0, 3, 4, 6, 8]);
console.log(r);