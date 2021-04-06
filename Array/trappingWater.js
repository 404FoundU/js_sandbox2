//https://www.youtube.com/watch?v=fTD6Se3ZtEo

const trappingWater = (arr) => {
    let length = arr.length;
    let totalWater = 0;
    let rightMax;
    let leftMax = [arr[0]];
    for (let i = 0; i < length; i++) {
        leftMax[i] = Math.max(arr[i], leftMax[i - 1]);

    }
    rightMax[length-1] = arr[length - 1];
    for (let i = length-2; i >=0; i--) {
        rightMax[i] = Math.max(arr[i], rightMax[i + 1]);

    }
    for (let i = 1; i < length - 1; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - arr[i];
    }
};
console.log(trappingWater([0, 2, 4, 0, 2, 1, 2, 6]));
// console.log(trappingWater([3, 0, 0, 2, 0, 4]));