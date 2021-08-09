//https://leetcode.com/problems/shortest-path-in-binary-matrix/
//https://www.youtube.com/watch?v=CABaqOkWbgQ
const shortestPathBinaryMatrix = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    //check
    if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) {
        return -1;
    }
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    const visited = new Set();
    // row = 0, col = 0 and initial number of steps
    let steps = 1;
    const queue = [[0, 0, steps]];
    // mark grid as visited
    let key = 0 + ',' + 0;
    visited.add(key)
    while (queue.length) {
        let point = queue.shift();
        if (point[0] === m - 1 && point[1] === n - 1) {
            return point[2] // no of steps taken
        }
        for (let d of dir) {
            let row = point[0] + d[0];
            let col = point[1] + d[1];
            steps = point[2];
            if (row >= 0 && row < m && col >= 0 && col < n) {
                key = row + ',' + col;
                if (grid[row][col] === 0 && !visited.has(key)) {
                    visited.add(key);
                    queue.push([row, col, steps + 1])
                }
            }
        }
    }
    return -1;
}
let r = shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]);
console.log(r);
