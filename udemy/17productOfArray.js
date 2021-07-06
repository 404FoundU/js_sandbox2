const productOdArray = (arr) => {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOdArray(arr.slice(1));
};
console.log(productOdArray([1,2,3]));
console.log(productOdArray([1,2,3,10]));
