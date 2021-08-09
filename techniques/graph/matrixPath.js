//https://coderbyte.com/editor/Matrix%20Path:JavaScript

const matrixpath = (arr) => {
    const grid = arr.map(el => el
        .split('')
    );
    let m = grid.length;
    let n = grid[0].length;
    //check

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();
    // row = 0, col = 0 and changed
    let changed = 0;
    const queue = [[0, 0, changed]];
    // mark grid as visited
    let key = 0 + ',' + 0;
    visited.add(key)
    grid[0][0]='1';
    while (queue.length) {
        let point = queue.shift();
        if (point[0] === m - 1 && point[1] === n - 1) {
            if (point[2] > 0) {
                return point[2]; // no of steps taken

            }
            return true;
        }
        for (let d of dir) {
            let row = point[0] + d[0];
            let col = point[1] + d[1];
            if (row >= 0 && row < m && col >= 0 && col < n) {
                key = row + ',' + col;
                changed = point[2]
                if (grid[row][col] === '1' && !visited.has(key)  && changed<2) {
                    visited.add(key);
                    queue.push([row, col, changed])

                }
                if (grid[row][col] === '0'  && changed<2) {
                    grid[row][col] = '1'
                    queue.push([row, col, changed+1])

                }
            }
        }
    }
    return 'not possible';
}
// let r = matrixpath(["10000", "11011", "10101", "11001"]);
let r = matrixpath(["11100", "10011", "10101", "10011"]);

console.log(r);
