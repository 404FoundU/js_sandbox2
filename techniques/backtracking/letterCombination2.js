//https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1276093/JAVASCRIPT-oror-BACKTRACKING-SOLUTION
const letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let result = [];
    const dfs = ( index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        let current = map[digits[index]];
        for (let i = 0; i < current.length; i++) {
            path = path + current[i];
            dfs( index + 1, path );
            path = path.slice(0,path.length-1);
        }
    }
    dfs(0, '');
    return result;
};

const result = letterCombinations('23');
console.log(result);