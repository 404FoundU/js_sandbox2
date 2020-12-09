const duplicates = (...params) => {
    if (params.length < 2) {
        return false;
    }
    params.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < params.length) {
        if (params[next] === params[start]) {
            return true;
        } else {
            next++;
            start++;
        }}


    return true;
};
console.log(duplicates(1, 2, 3));
console.log(duplicates(1, 2, 2));