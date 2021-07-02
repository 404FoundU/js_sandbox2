//https://leetcode.com/problems/two-sum/


let twoSum = function(nums, target) {
    let map = {};
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(diff in map ){
            return [map[diff], i ]
        }
        else{
            map[nums[i]] =i
        }

    }
    return []


};
console.log(twoSum([2, 7, 11, 15], 9));