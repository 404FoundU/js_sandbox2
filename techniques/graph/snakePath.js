//https://leetcode.com/discuss/interview-question/1393222/Compass-Online-Interview-or-Karat-or-Snake-Game
const snakePath = (start) => {
    const grid =
        [
            ['+', '+', '+', '+', '+', '+', '+', '0', '0'],
            ['+', '+', '0', '0', '0', '0', '0', '+', '+'],
            ['0', '0', '0', '0', '0', '+', '+', '0', '+'],
            ['+', '+', '0', '+', '+', '+', '+', '0', '0'],
            ['+', '+', '0', '0', '0', '0', '0', '0', '+'],
            ['+', '+', '0', '+', '+', '0', '+', '0', '+'],
        ];
    let m = grid.length;
    let n = grid[0].length;
    //check
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();
    // row = 0, col = 0 and changed
    let steps = 0;
    const queue = [[...start, steps]];
    // mark grid as visited
    let key = start[0] + ',' + start[1];
    visited.add(key)
    while (queue.length) {
        let point = queue.shift();
        if (point[2] > 0) {
            if (point[0] === 0 || point[1] === 0 || point[0] === m - 1 || point[1] === n - 1) {
                return [point[0], point[1]];
            }
        }
        for (let d of dir) {
            let row = point[0] + d[0];
            let col = point[1] + d[1];
            if (row >= 0 && row < m && col >= 0 && col < n) {
                key = row + ',' + col;
                if (grid[row][col] === '0' && !visited.has(key)) {
                    visited.add(key);
                    queue.push([row, col, steps + 1])
                }
            }
        }
    }
    return 'not possible';
}
let start1_1 = [2, 0]; // Expected output = [5, 2]
let start1_2 = [0, 7]; // Expected output = [0, 8]
let start1_3 = [5, 2]; // Expected output = [2, 0] or [5, 5]
let start1_4 = [5, 5]; // Expected output = [5, 7]
let r = snakePath(start1_4);
console.log(r);
