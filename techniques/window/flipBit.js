const flipBit = (a) => {
    let arr = [1, 2];
    let f=0;
    let count = 0;
    while (f<a.length) {
        let bit = a[f];
        if (bit === 1) {
            count++;
        }
        f++;

    }
    return count;

};

let result ;
result = flipBit([1, 0, 0, 1, 0]);
console.log(result);