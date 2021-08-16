//https://leetcode.com/discuss/interview-question/1397872/Compass-Online-Karat-Test
// https://www.youtube.com/watch?v=pfiQ_PS1g8E&t=531s
//https://www.youtube.com/watch?v=m9TrOL1ETxI
const grid = [
    ['c', 'c', 'x', 't', 'i', 'b'],
    ['c', 'c', 'a', 't', 'n', 'i'],
    ['a', 'c', 'n', 'n', 't', 't'],
    ['t', 'c', 's', 'i', 'p', 't'],
    ['a', 'o', 'o', 'o', 'a', 'a'],
    ['o', 'a', 'a', 'a', 'o', 'o'],
    ['k', 'a', 'i', 'c', 'k', 'i'],
]
const wordSearch = (word) => {
    const rows = grid.length;
    const column = grid[0].length;
    const visited = new Set();
    const final = [];
    //i = current character in target
    const traverse = (r, c, i, stack) => {
        let st = [...stack];
        final.push(st);
        if (i === word.length) {

            return true;
        }
        if (r < 0 || r >= rows || c < 0 || c >= column ||
            word[i] !== grid[r][c] || visited.has([r, c])) {
                        return false ;
        }
        stack.push([r,c]);
        visited.add([r, c]);
        let result = traverse(r + 1, c, i + 1) ||
            traverse(r - 1, c, i + 1) ||
            traverse(r, c + 1, i + 1) ||
            traverse(r, c - 1, i + 1);
        visited.delete([r, c]);
        stack.pop();
        return result;
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < column; c++) {
            if (traverse(r, c, 0, [])) {
                return final;
            }
        }
    }
    return '';
}
console.log(wordSearch("catnipz"));