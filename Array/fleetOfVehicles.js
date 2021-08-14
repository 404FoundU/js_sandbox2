//https://leetcode.com/discuss/interview-question/1365052/Amazon-OA
const fleetOfVehicles = (arr) => {
    let result = [];
    for (let el of arr) {
        if (el % 2 !== 0) {
            result.push(0);
        } else {
            let remainder = el % 4;
            let count = 0;
            if (remainder === 0) {
                result.push(el / 4);
            } else {
                if (el > 2) {
                    count = Math.floor(el/4);
                }

                count += remainder / 2;
                result.push(count)
            }

        }
    }
    return result;
};
// let arr = [6, 3, 2];
let arr = [4,5,6];
console.log(fleetOfVehicles(arr));