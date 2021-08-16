//https://leetcode.com/discuss/interview-experience/1316685/Amazon-OA-SDE1-(new-questions)
//amazon
const splitArraySum = (arr) => {
    let total = 0;
    for (let val of arr) {
        total += val;
    }
    let count = 0;
    let leftSum = 0, rightSum = 0;
    for (let i = 0; i < arr.length-1; i++) {
        leftSum += arr[i];
        rightSum = total - leftSum;
        if (leftSum > rightSum) {
            count++;
        }
    }
    return count;
};

let a = [10, 4, -8, 7];
console.log(splitArraySum(a));