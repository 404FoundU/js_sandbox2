//https://www.youtube.com/watch?v=YK78FU5Ffjw&t=903s


const permutation = (s) => {
    const result = [];
    const visited = new Set();
    const traverse = ( stack, callstack) => {
        if (stack.length === s.length) {
            result.push([...stack]);
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (!visited.has(s[i])) {
                visited.add(s[i])
                stack.push(s[i]);
                traverse(stack, callstack+1)
                stack.pop();
                visited.delete(s[i])
            }

        }
    };
    traverse([], 0)
    return result;
}
let result = permutation("uni");
// let result = permutation([1,2,3]);
console.log(result);