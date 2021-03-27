//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183952#overview
const slidingWindow = (arr, num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum+= arr[i];
    }
    let newSum = sum;
    for (let j = 0; j < arr.length -num; j++) {
         newSum = newSum + arr[j + num] - arr[j];
        sum = Math.max(sum, newSum);
    }
    return sum;
};
console.log(slidingWindow([2, 6, 9, 1, 8, 5, 6, 3], 3));;