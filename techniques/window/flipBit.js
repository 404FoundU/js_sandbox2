//https://practice.geeksforgeeks.org/problems/flip-bits0240/1
/**
 * brute force
 * @param arr
 * @returns {number}
 */
const flipBit = (arr) => {
    let zeroCount = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
        let count1 = 0, count0 = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === 1) {
                count1++;
            }
            else {
                count0++;
            }
            maxSum = Math.max(maxSum, count1 - count0);
        }

    }
    return zeroCount+maxSum;

};
/*const flipBit = (arr) => {

}*/

result = flipBit([1, 0, 0, 1, 0]);

console.log(result);