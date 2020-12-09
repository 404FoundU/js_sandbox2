function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (num === arr[middle]) {
            return middle;
        }
        else if (num < arr[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return -1;

}



console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));