const fname = (num) => {
    if (num === 0) {
        return 0;
    }
    return num + fname(--num);
};
console.log(fname(6));
console.log(fname(10));
