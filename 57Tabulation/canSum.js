const canSum = (targetSum, n) => {
    let table = Array[targetSum + 1].fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of n) {
                table[i + num] = true;
            }
        }
    }
    return table(targetSum);

};
/**
 * @Test
 * Empty array
 * Sum is 0
 *
 */
console.log(canSum(7, [5,3,4]));
console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));