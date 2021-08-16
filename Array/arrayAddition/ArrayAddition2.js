// subsetsum problemllll
function _arrayAddition(targetSum, arr, memo = {}) {
    if (arr.length === 0) {
        return  targetSum === 0;
    }
          let remainder = targetSum - arr[0];
    return _arrayAddition(remainder, arr.slice(1))  || _arrayAddition(targetSum, arr.slice(1))

}

const arrayAddition = (arr) => {
    arr.sort((el1, el2) => el1 - el2);
    let sum = arr.pop();
    return _arrayAddition(sum, arr);
};
console.log(arrayAddition([4, 6, 23, 10, 1, 3]));
console.log(arrayAddition([5,7,16,1,2]));