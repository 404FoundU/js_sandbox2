const duplicates = (...params) => {

    if (params.length < 2) {
        return false;
    }
    let newSet = new Set([...params]);
    return newSet.size === ([...
        params].length);




};
console.log(duplicates(1, 2, 3));
console.log(duplicates(1, 2, 2));