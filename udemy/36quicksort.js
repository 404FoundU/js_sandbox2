const swap = (a, i, j) => {
    [a[i], a[j]] = [a[j], a[i]];
};
const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
};
console.log(pivot([5, 2, 4, 7, 9, 8]));