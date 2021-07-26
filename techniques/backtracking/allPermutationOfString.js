//https://www.youtube.com/watch?v=YK78FU5Ffjw&t=903s

const permutation = (s) => {
    const subset = []
    const path = []
    const visited = new Set();
    dfs(s, path, subset, visited);
    return subset;
};
const dfs = (s, stack, subset, visited) => {
    if (stack.length===s.length) {
        subset.push([...stack]);
        return
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!visited.has(char)) {
            visited.add(char);
            stack.push(char);
            dfs(s,stack, subset, visited)
            stack.pop();
            visited.delete(char);
        }

    }
}
let result = permutation("uni");
// let result = permutation([1,2,3]);
console.log(result);