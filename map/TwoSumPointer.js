//https://leetcode.com/problems/two-sum/


let twoSum = function(nums, target) {
    let left=0, right = nums.length-1;
    while (left < right) {

        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right]
        }
        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;


};
console.log(twoSum([2, 7, 11, 15], 22));