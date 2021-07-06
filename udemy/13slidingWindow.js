const minSubArrayLen = (nums, s) => {
    if (nums.length <2) {
        return 0;
    }
    let minLength = Infinity;
    let total = 0;
    let start = 0;
    let end = 0;
    while (start < nums.length) {
        if (total < s && end < nums.length) {
            total += nums[end];
            end++
        }
        else if (total >= s) {
            minLength = Math.min(minLength, end - start);
            total -= nums[start];
            start++;
        } else {
            break;
        }
    }


    return minLength === Infinity ? 0 : minLength;

};
console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
