//https://leetcode.com/discuss/interview-question/1397872/Compass-Online-Karat-Test
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
    let column = grid[0].length;
    let rows = grid.length;
    let directions = [[0, 1], [1, 0]]
    let letters = word.split('');
    let letterLength = letters.length
    let visited = new Set();
    let key = 0 +',' + 0
    visited.add(key);
    const queue = [[1,1, 1]];
    const result = [];
    while (queue.length) {
        let point = queue.shift();
        result.push([point[0], point[1]]);
        for (let dir of directions) {
            let c = point[1] + dir[1];
            let r = point[0] + dir[0];
            let index = point[2];
            if (c >= 0 && c < column && r >= 0 && r < rows) {
                key=r+','+c
                let letter = grid[r][c];
                let temp = letters[index];
                if (letter === letters[index]&& !visited.has(key)) {

                    queue.push([r,c, index+1]);
                    visited.add(key);
                }

            }
        }
    }
    return result;
}
console.log(wordSearch("catnip"));