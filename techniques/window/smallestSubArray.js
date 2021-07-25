//https://leetcode.com/problems/minimum-size-subarray-sum/
const smallestSubArray = (targetSum, arr) => {
    let minLength = Infinity;

    let currentSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]
        while (currentSum >= targetSum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }

    return minLength;

};
let result = smallestSubArray(7, [2,3,1,2,4,3])
console.log(result);