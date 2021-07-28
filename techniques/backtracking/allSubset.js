//https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript
//https://www.youtube.com/watch?v=LdtQAYdYLcE

const allSubset = (s) =>{
    const result = [];
    const traverse = (index, stack) => {
        //clone
        result.push([...stack]);
        for (let i = index; i < s.length; i++) {
            stack.push(s[i])
            traverse(i+1, stack)
            stack.pop();
        }
    }
    traverse(0, []);
    return result
}
    let result = allSubset([1,2,3]);
console.log(result);