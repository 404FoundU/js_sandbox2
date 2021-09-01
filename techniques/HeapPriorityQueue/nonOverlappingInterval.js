//https://leetcode.com/problems/non-overlapping-intervals/
//
const nonOverlappingInterval = (intervals) =>{
    intervals.sort((a,b)=>a[1]-b[1]);

    let queue = [];
    let a = intervals[0];
    let start = a[0];
    let end = a[1];
    while (start < end) {
        queue[start] = 1
        start++;
    }
    let result = [];
    for (let el of intervals) {
         start = el[0];
         end = el[1];
        while (start < end) {
            if (queue[start] === 1) {
                result.push(el);
                break;
            }
            queue[start] = 1;
            start++;
        }

    }
    return result.length-1;



}
// console.log(nonOverlappingInterval([[1, 2], [2, 3], [3, 4], [1, 3]]));
// console.log(nonOverlappingInterval([[1,2],[1,2],[1,2]]));
// console.log(nonOverlappingInterval( [[1,2],[2,3]]));
console.log(nonOverlappingInterval( [[1,100],[11,22],[1,11],[2,12]]));