//https://practice.geeksforgeeks.org/problems/flip-bits0240/1
//https://www.youtube.com/watch?v=REX6m1CjZMA
/**
 * brute force
 * @param arr
 * @returns {number}
 */
//brute force
/*const flipBit = (arr) => {
   let originalCount1=0
   let maxDiff = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
         originalCount1++;
      }
      let count1 = 0, count0 = 0;
      for (let j = i; j < arr.length; j++) {
         if (arr[j] === 1) {
            count1++;
         } else {
            count0++;
         }
         maxDiff = Math.max(maxDiff, count0 - count1);
      }
   }
   return maxDiff + originalCount1;
}*/



//kadans
const flipBit = (arr) => {
   let  sum = 0, maxSum = 0, originalCount1=0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
         sum++;
      } else {
         sum--;
         originalCount1++;
      }
      if (maxSum < sum) {
         maxSum = sum;
      }
      if (sum < 0) {
         sum = 0;
      }
   }
   // console.log(originalCount1);
   return maxSum + originalCount1


};

// result = flipBit([1, 0, 0, 1, 0]);//4
// result = flipBit([1, 0, 0, 1, 0, 0, 1]); //6
result = flipBit([0, 1, 0, 0, 1, 1, 0]);//5
// result = flipBit([0, 0, 0, 1, 0, 1]);//5
console.log(result);