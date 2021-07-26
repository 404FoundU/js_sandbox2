//https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
//https://www.youtube.com/watch?v=LdtQAYdYLcE
/*
const final = [];
const powerSet = (s, i=0, current="") => {
    if (i === s.length) {
        final.push(current);
        return;
    }
    powerSet(s,i+1, current+s.charAt(i));
    powerSet(s,i+1, current);
};
let result = powerSet("abc");
console.log(final);
 */
const powerSet = (s) => {
    const subset = []
    dfs(s, subset, 0, []);
    return subset;
};
const dfs = (s, subset, index, path) => {
    subset.push([...path]);
    for (let i = index; i < s.length; i++) {
        path.push(s[i]);
        dfs(s,subset, i+1, path)
        path.pop();
    }
}
let result = powerSet([1,2,3]);
console.log(result);