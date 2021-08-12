//https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1276093/JAVASCRIPT-oror-BACKTRACKING-SOLUTION
const letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    const result = [];
    let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const traverse = (currentIndex,stack) => {
        if (stack.length === digits.length) {
            let st = [...stack];
            result.push(st);
            return
        }
        let digit = digits[currentIndex];
        let str = map[parseInt(digit)];
        for (let i = 0; i < str.length; i++) {
            //stack push
            stack = stack + str[i];
            traverse(currentIndex + 1, stack);
            //stack pop
            stack = stack.slice(0, stack.length - 1);
        }

    }
    traverse(0, "");
    return result;
};

const result = letterCombinations('23');
console.log(result);