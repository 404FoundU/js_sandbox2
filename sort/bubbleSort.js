
const swap =(arr, i) => {

    [arr[i+1], arr[i] ] =[arr[i], arr[i+1] ]
}
const bubbleSort = (arr) => {
    let count = arr.length;
    while (count > 0) {
        let swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i);
                swapped = true;
            }
        }
        if (swapped === false) {
            break;
        }
        count--;
    }
    return arr;

}
console.log(bubbleSort([5, 9, 4, 10, 3, 7]));