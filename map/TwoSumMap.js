//https://leetcode.com/problems/two-sum/


let twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        let mapEl = map.get(diff);
        if (mapEl !== undefined) {
            return [mapEl, i]
        }
        else{
            map.set(nums[i],i)
        }

    }
    return []


};
console.log(twoSum([2, 7, 11, 15], 9));