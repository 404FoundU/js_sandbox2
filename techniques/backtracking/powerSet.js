//https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
//https://www.youtube.com/watch?v=LdtQAYdYLcE


const powerSet = (s) => {
    const subset = []
    dfs(s, subset, 0, "");
    return subset;
};
const dfs = (s, subset, index, path) => {
    subset.push(path);
    for (let i = index; i < s.length; i++) {
        path += s[i]
        dfs(s,subset, i+1, path)
        path = path.slice(0,path.length-1);
    }
}
let result = powerSet([1,2,3]);
console.log(result);