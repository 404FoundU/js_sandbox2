const matrixPath = (strArr) => {
    let grid = strArr.map(el => el
        .split('')
    );
    let m = strArr.length;
    let n = strArr[0].length;
    let queue = [[0, 0, 0]];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let visited = [];
    let key = 0 +','+ 0;
    visited.push(key);
    grid[0][0] = "0";
    while (queue.length > 0  ) {
        let point = queue.shift();

        if (point[0] === m - 1 && point[1] === n - 1) {
            if (point[2] === 0) {
                return true;
            }
            return point[2];
        }
        for (let d of dir) {
            let row = point[0] + d[0];
            let column = point[1] + d[1];
            let changed = point[2];
            key = row +','+ column;

            if (row >= 0 && column >= 0 && row < m && column < n) {
                if (grid[row][column] === "1") {
                    queue.push([row, column, changed]);
                    visited.push(key);
                    grid[row][column] = "0";
                }
                if (grid[row][column] === "0" && !(visited.includes(key)) && changed<2) {
                    queue.push([row, column, changed+1]);
                    visited.push(key);
                    grid[row][column] = "1";

                }
            }
        }
    }
    return 'not possible';
};
// console.log(matrixPath(["11100", "10011", "10101", "10011"]));;
console.log(matrixPath(["10000", "11011", "10101", "11001"]));;