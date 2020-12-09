const fname = (num) => {

    if (num === 1) {
        return 1;
    }
    if (num === 2) {
        return 1;
    }


    return fname(num -1) + fname(num - 2);
};
console.log(fname(3));
console.log(fname(10));
console.log(fname(28));
