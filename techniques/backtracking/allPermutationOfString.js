//https://www.youtube.com/watch?v=YK78FU5Ffjw&t=903s

const permutation = (s) => {
    const subset = []
    const path = []
    const freq = [false,false,false];
    dfs(s, path, subset, freq);
    return subset;
};
const dfs = (s, path, subset, freq) => {
    if (path.length===s.length) {
        subset.push([...path]);
        return
    }
    for (let i = 0; i < s.length; i++) {
        if (freq[i] === false) {
            freq[i] = true;
            path.push(s[i]);
            dfs(s,path, subset, freq)
            path.pop();
            freq[i] = false;
        }

    }
}
let result = permutation([1,2,3]);
console.log(result);