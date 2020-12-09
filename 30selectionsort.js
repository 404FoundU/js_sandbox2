insertionsort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        let smallest = j;

        for (let i = j+1; i < arr.length; i++) {
            if (arr[smallest] > arr[i ]) {
                smallest = i;
            }
        }
        if (j !== smallest) {
            let temp = arr[j];
            arr[j] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
};
console.log(insertionsort([1, 5, 9, 37, 2]));