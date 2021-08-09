//https://www.youtube.com/watch?v=3N47yKRDed0

const partitionEqualSubsetSum = (arr)=>{
    let leftSum =0;
    let rightSum =0;
    let total = 0;
    for (let val of arr) {
        total += val;
    }
    arr.sort((a,b)=>a-b);
    for (let i = arr.length - 1; i >= 0; i--) {
        let el = arr[i];
        rightSum += el;
        leftSum = total - rightSum;
        if (leftSum === rightSum) {
            return true
        }


    }
return false
}
let result = partitionEqualSubsetSum([1,5,11,5])
 result = partitionEqualSubsetSum([1,2,3,5])
console.log(result);