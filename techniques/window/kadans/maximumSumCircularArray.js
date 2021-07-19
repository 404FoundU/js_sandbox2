// https://leetcode.com/problems/maximum-sum-circular-subarray/
//https://www.youtube.com/watch?v=Q1TYVUEr-wY

// Kadanes algorithm

var maximumSumCircularArray = function (A) {
    // Max sum of Circular Subarray = Total Sum of array - Minimum sum of Subarray

    function kadaneAlgo(nums) {
        let currSum = nums[0], maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (currSum < 0) currSum = 0;
            currSum = currSum + nums[i];
            if (maxSum < currSum) {
                maxSum = currSum;
            }
        }
        return maxSum;
    }

    let nonCircularSumSubArray = kadaneAlgo(A);

    let n = A.length;

    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += A[i];
        A[i] = -A[i];
    }

    let minSumSubArray = kadaneAlgo(A);

    let circularSumSubArray = totalSum + minSumSubArray;

    return circularSumSubArray === 0 ? nonCircularSumSubArray : Math.max(circularSumSubArray, nonCircularSumSubArray);
};
// let result = maximumSumCircularArray( [1,-2,3,-4]);
let result = maximumSumCircularArray( [5,-3,5]);

console.log(result);