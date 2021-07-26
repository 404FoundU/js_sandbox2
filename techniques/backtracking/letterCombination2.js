//https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1276093/JAVASCRIPT-oror-BACKTRACKING-SOLUTION
const letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let answer = [];
    let path = "";
    let index = 0;
    dfs(digits, index, path, map, answer);
    return answer;
};
const dfs = (digits, index, path, map, answer) => {
    if (index === digits.length) {
        answer.push(path);
        return;
    }
    let current = map[digits[index]];
    for (let i = 0; i < current.length; i++) {
        path = path + current[i];
        dfs(digits, index + 1, path, map, answer);
        path = path.slice(0,path.length-1);
    }
}
const result = letterCombinations('23');
console.log(result);