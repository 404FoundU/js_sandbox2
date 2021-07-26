//https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
//https://www.youtube.com/watch?v=LdtQAYdYLcE


const allSubset = (s) => {
    const subset = []
    dfs(s, subset, 0, []);
    return subset;
};
const dfs = (s, subset, index, stack) => {
    subset.push([...stack]);
    for (let i = index; i < s.length; i++) {
        stack.push(s[i]);
        dfs(s,subset, i+1, stack)
        stack.pop();
    }
}
let result = allSubset([1,2,3]);
console.log(result);