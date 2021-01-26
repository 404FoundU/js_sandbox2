/*const sumRange  = (num) =>{
    if (num === 1) {
        return 1;
    }
    if (num === 0) {
        return 0;
    }

    return num + sumRange(num -1);
};*/
const sumRange  = (num, total = 0) =>{

    if (num <= 0) {
        return total;
    }

    return  sumRange(num -1, total + num);
};
let temp1 = sumRange(1);
let temp2 = sumRange(6);
let temp4 = sumRange(3);
let temp3 = sumRange(7);