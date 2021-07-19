//https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
//https://www.youtube.com/watch?v=54VcLqAHrHk
//brute force
/*const threeSum = (arr) => {
    arr.sort((a,b)=> a-b);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        for (let j = i+ 1; j < arr.length; j++) {
            if (j > i+1 && arr[i] === arr[i - 1]) {
                continue;
            }
            for (let k = j+1 ; k < arr.length; k++) {
                if (k > j+1 && arr[i] === arr[i - 1]) {
                    continue;
                }
                if (arr[i] + arr[j] + arr[k] === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return result;
}*/
/*
arr[i]+arr[j}+arr[k]  === 0;
arr[j]+ arr[k] === 0-nums[i]
 */
const threeSum = (arr) => {
    arr.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        const target = 0 - arr[i];
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[left] + arr[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++
            } else {
                result.push([arr[i], arr[left], arr[right]]);
                //duplicates
                while (arr[left] ===arr[left+1]) left++;
                while (arr[right] ===arr[right-1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}
// console.log(threeSum([0,1,2,4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// fourSum use i, j left right