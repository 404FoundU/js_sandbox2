//https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
//https://www.youtube.com/watch?v=LdtQAYdYLcE

/*const allSubset = (s) => {
    const result = [];
    const traverse = (index, stack, callstack) => {
        //clone
        result.push([...stack]);
        console.log('result:', result);
        for (let i = index; i < s.length; i++) {
            stack.push(s[i])
            console.log('stack1:', stack);
            console.log('callstack1:', callstack);
            traverse(i + 1, stack, callstack + 1)
            stack.pop();
            console.log('callstackAfterPop:', callstack);
            console.log('stackAfterPop:', stack);
        }
    }
    traverse(0, [], 0);
    return result
}*/
const allSubset = (s) =>{
    const result = [];
    const traverse = (current, stack)=> {
        let st=[...stack]
        result.push(st);
        for (let i = current; i < s.length; i++) {
            let char = s[i];
            stack.push(char);
            traverse(i + 1, stack);
            stack.pop()
        }

    }
    traverse(0, [])
    return result;

}
let result = allSubset([1,2,3]);
console.log(result);