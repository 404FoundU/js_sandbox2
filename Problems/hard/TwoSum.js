//https://www.youtube.com/watch?v=4CUFDtXmFbU

const twoSum = (arr, target) => {
    const leftOver = {};
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (diff > 0) {
            if (arr[i] in leftOver) {
                indices =  [leftOver[arr[i]], i];
                break;
            }
            leftOver[diff] = i;
        }
    }
    return [arr[indices[0]], arr[indices[1]]];


};
console.log(twoSum([1, 2, 3, 9, 6], 8));