const histogramArea = (arr) => {
    const area = Array.from({length:arr.length}, ()=>0);
    let maxArea = 0;
    for (let i = 0; i < arr.length; i++) {
        area[i] += arr[i];
        let j = i + 1;
        while (arr[i] <= arr[j] && j < arr.length) {
            area[i] += arr[i];
            j++;
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        area[i] += arr[i];
        let j = i - 1;
        while (arr[i] <= arr[j] && j >= 0) {
            area[i] += arr[i];
            j--;
        }
        area[i] -= arr[i];
        if (area[i] > maxArea) {
            maxArea = area[i];
        }

    }
        return maxArea;
};
// console.log(histogramArea([2, 1, 3, 4, 1]));
// console.log(histogramArea([6, 3, 1, 4, 12, 4]));
// console.log(histogramArea( [5, 6, 7, 4, 1]));
console.log(histogramArea( [1, 1, 1, 1, 1, 1]));
