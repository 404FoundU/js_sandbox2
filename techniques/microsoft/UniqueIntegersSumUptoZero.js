//https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero
//https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions
var sumZero = function(n) {
    const uniqueIntegers = [];
    const half = parseInt(n / 2);

    for (let i = 1; i <= half; i++) {
        uniqueIntegers.push(i);
        uniqueIntegers.push(-i);
    }

    if (n % 2) {
        uniqueIntegers.push(0);
    }

    return uniqueIntegers;
};