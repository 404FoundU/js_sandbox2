//https://www.youtube.com/watch?v=YK78FU5Ffjw&t=903s

const permutation = (s) => {
    const result = [];
    const visited = new Set();
    const traverse = (stack) => {

        let st = [...stack];
        if (st.length===s.length) {
            result.push(st);
        }
        for (let i = 0; i < s.length; i++) {
            let character = s[i];

            if (!visited.has(character)) {
                visited.add(character)
                stack.push(character);
                traverse(stack);
                stack.pop();
                visited.delete(character)
            }

        }
    };

    traverse([])
    return result;
}

let result = permutation("uni");
// let result = permutation([1,2,3]);
console.log(result);
/*const permutation = (s) => {
    const result = [];
    const visited = new Set();
    const traverse = ( stack, callstack) => {
        if (stack.length === s.length) {
            result.push([...stack]);
            console.log('result:', result);
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (!visited.has(s[i])) {
                visited.add(s[i])
                stack.push(s[i]);
                console.log('stack1:', stack);
                console.log('callstack1:', callstack);
                traverse(stack, callstack+1)
                stack.pop();
                visited.delete(s[i])
                console.log('callstackAfterPop:', callstack);
                console.log('stackAfterPop:', stack);
            }

        }
    };
    traverse([], 0)
    return result;
}*/
let result = permutation("uni");
// let result = permutation([1,2,3]);
console.log(result);