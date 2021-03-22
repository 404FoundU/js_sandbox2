//https://www.youtube.com/watch?v=4CUFDtXmFbU

const twoSum = (arr, target) => {
    const leftOver = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let diff = target - current;
            if (current in leftOver) {
                return [current, arr[leftOver[current]]]
            }
            leftOver[diff] = i;

    }
};
console.log(twoSum([1, 2, 3, 9, 6], 15));