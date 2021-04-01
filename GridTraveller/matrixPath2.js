const matrixPath = (strArr) => {
    let grid = strArr.map(el => el
        .split('')
    );
    let current = grid[0][0];
    let m = strArr[0].length;
    let n = strArr.length;
    let queue = [[0, 0, 1, 0]];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    grid[0][0] = "-1";
    while (queue.length > 0) {
        let point = queue.shift();
        if (point[0] === m - 1 && point[1] === n - 1) {
            if (point[2] === 0) {
                return true;
            }
            return point[3];
        }
        for (let d of dir) {
            let row = point[0] + d[0];
            let column = point[1] + d[1];
            let replace = point[2];
            let count = point[3];
            if (row >= 0 && column >= 0 && row < m && column < n) {
                if (grid[row][column] === "1") {
                    queue.push([row, column, replace-1, count]);
                    grid[row][column] = "-1";
                }
                if (grid[row][column] === "0") {
                    if (replace < 1) {
                        grid[row][column] = "1";
                        queue.push([row, column, replace + 1, count+1]);
                    }
                }

            }
        }
    }
};
matrixPath(["11100", "10011", "10101", "10011"]);