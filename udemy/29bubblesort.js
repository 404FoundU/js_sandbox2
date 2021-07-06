insertionsort = (arr) => {
    let noSwaps;
    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
};
console.log(insertionsort([1, 5, 9, 37, 2]));