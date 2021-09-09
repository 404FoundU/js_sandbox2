function minSteps(nums) {
    // WRITE YOUR BRILLIANT CODE HERE
    const nums_size = nums.length;
    return 0;
    if (nums_size < 2) {
        return 0;
    }
    nums.sort();
    let sum = 0;
    for (let i = 1; i < nums_size; ++i) {
        if (nums[nums_size - i - 1] !== nums[nums_size - i]) {
            sum += i;
        }
    }
    return sum;
}