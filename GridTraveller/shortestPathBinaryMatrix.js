//https://www.youtube.com/watch?v=CABaqOkWbgQ
//https://leetcode.com/problems/shortest-path-in-binary-matrix/
const shortestPathBinaryMatrix = (grid) => {
    if (grid[0][0] === 1) {
        return -1;
    }
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    //[x coordinate, y, initial count
    queue.push([0, 0, 1]);
    grid[0][0] = 1;
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    while (queue.length > 0 ) {
        let point = queue.shift();
        if (point[0] === m - 1 && point[1] === n - 1) {
            return point[2];
        }
        for (let val of dir) {
            let row = point[0] + val[0];
            let column = point[1] + val[1];
            if (row >= 0 && column >= 0 && row < m && column < n && grid[row][column] === 0) {
                queue.push([row, column, point[2] + 1]);
                grid[row][column] = 1;
            }
        }
    }
    return -1;
};
console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]));
;