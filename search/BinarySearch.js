/**
 *Binary search can only be run on a sorted list
 * @param arr
 * @param el
 * return index
 */

const binarySearch = (arr, el) => {
    let middleIndex = Math.floor(arr.length / 2);
    let start = 0;
    let end = arr.length - 1;
    while (end>=start ) {
        if (el === arr[middleIndex]) {
            return middleIndex;
        }

        if (el > arr[middleIndex]) {
            console.log("here")
            start = middleIndex+1;
        } else {
            end = middleIndex-1;
        }
        middleIndex = Math.floor((end + start ) / 2);

    }
    return -1;
};
console.log(binarySearch([3, 6, 8, 10, 19, 41, 80, 101], 19));
// console.log(binarySearch([3,  80, 101], 101));