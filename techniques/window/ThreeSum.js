//https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
//https://www.youtube.com/watch?v=54VcLqAHrHk
//brute force
const threeSum = (arr) => {
    arr.sort((a,b)=> a-b);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        for (let j = i+ 1; j < arr.length; j++) {
            if (j > i+1 && arr[i] === arr[i - 1]) {
                continue;
            }
            for (let k = j+1 ; k < arr.length; k++) {
                if (k > j+1 && arr[i] === arr[i - 1]) {
                    continue;
                }
                if (arr[i] + arr[j] + arr[k] === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return result;
}

// console.log(threeSum([0,1,2,4]));
console.log(threeSum([-1,0,1,2,-1,-4]));
