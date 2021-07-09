// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
//https://www.youtube.com/watch?v=HCL4_bOd3-4
// Kadanes algorithm
const largestSumContiguousArray = (arr) => {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (maxSum < sum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;

};
let result = largestSumContiguousArray([-2, -3, 4, -1, -2, 1, 5, -3]);

console.log(result);