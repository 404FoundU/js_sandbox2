//https://leetcode.com/problems/valid-parentheses/
const validParantheses = (s) => {
    if (s.length % 2 === 1) {
        return false;
    }
    let table = {
        '(': ')', '{': '}', '[': ']'
    };

    let stack = [];
    for (let i = 0; i <s.length; i++) {

        let char = s.charAt(i);
        if (char in table) {
            stack.push(char);
        }
        else{
            let old = stack.pop();
            let val = table[old];
            if (val !== char) {
                return false;
            }


        }
    }
    if (stack.length > 0) {
        return false
    }

    return true;
}
let r = validParantheses('()[]{}');
 r = validParantheses('([)]');
 r = validParantheses('{[]}');
console.log(r);