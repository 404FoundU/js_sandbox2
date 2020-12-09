const avgPair = (arr, avg) => {

    if (arr.length < 2) {
        return false;
    }
    let start = 0;
    let last = arr.length-1;
    while (start !== last) {
        let newAvg = (arr[start] + arr[last]) / 2;
        if (newAvg === avg) {
            return true
        }
        if (newAvg < avg) {
            start++;
        } else {
            last--;
        }
    }
    return false;




};
console.log(avgPair([1, 2, 3],2.5));
console.log(avgPair([1, 2, 2], 4));