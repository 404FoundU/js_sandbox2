const permutation = (arr) => {
        if (arr.length === 0) {
            return [[]];
        }
        const firstEl = arr[0];
        const rest = arr.slice(1);
        const permsWithoutFirst = permutation(rest);
        const permsWithFirst = [];
        permsWithoutFirst.forEach(perm => {
                for (let i = 0; i <= perm.length; i++) {
                    const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
                    permsWithFirst.push(permWithFirst);
                }
            }
        );
    return permsWithFirst;
};
console.log(permutation(['a', 'b', 'c']));