const arr = [1, 2, 3];

// const sum = (x, y) => x + y;
const sum = (x, y) => {
    return x + y;
};
arr.reduce(sum, 0); // 6

const increment = (x, y) =>{
    return [...x, x[x.length - 1] + y];
};
arr.reduce(increment, [0]); // [0, 1, 3, 6]


