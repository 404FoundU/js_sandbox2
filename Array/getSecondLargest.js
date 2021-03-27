function getSecondLargest(nums) {
    // Complete the function

    let largest = nums[0];
    let second = nums[0];

    for( let val of nums){
        if (val > largest) {
            second = largest;
            largest = val;
        }
        if (val < largest && val > second) {
            second = val;
        }
    }


    return second;



}

console.log(getSecondLargest([2, 3, 6, 6, 5]));