//https://www.youtube.com/watch?v=4CUFDtXmFbU
const twoSum = (arr, target) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let diff = target - el;
        map[diff] = i;
    }
    let index = []
    for (let j = 0; j < arr.length; j++) {
        let el = arr[j];
        let idx = map[el];
        if (idx !== undefined) {
            index.push(idx)
        }
    }
    return index;
}
/*const twoSum = (arr, target) => {
    const leftOver = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let diff = target - current;
            if (current in leftOver) {
                return [current, arr[leftOver[current]]]
            }
            leftOver[diff] = i;

    }
};*/
console.log(twoSum([1, 2, 3, 9, 6], 15));
console.log(twoSum([2, 7, 11, 15], 9));