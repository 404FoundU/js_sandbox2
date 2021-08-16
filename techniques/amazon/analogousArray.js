//https://leetcode.com/discuss/interview-question/1332322/amazon-online-assessment-july-2021-secret-array

const analogousArray = (consecutiveDifference , lowerBound , upperBound) => {
    let maxDiff = -Infinity;
    let minDiff = Infinity;
    let runningSum = 0;
    for (let diff of consecutiveDifference) {
        runningSum += diff;
        maxDiff = Math.max(maxDiff, runningSum);
        minDiff = Math.min(minDiff, runningSum);

    }
    let maxValidUpperBound = upperBound + minDiff;
    let minValidLowerBound = lowerBound + maxDiff;
    if (maxValidUpperBound>upperBound) {
        maxValidUpperBound = upperBound;
    }

    if (minValidLowerBound<lowerBound) minValidLowerBound = lowerBound;
    if (maxValidUpperBound > minValidLowerBound) {
        return maxValidUpperBound - minValidLowerBound + 1;
    }
    else return 0;
}
let r = analogousArray( [-2, -1, -2, 5], 3,10);
console.log(r);