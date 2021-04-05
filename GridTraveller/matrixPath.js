function matrixPath(strArr) { // 0 = up, 1 = down, 2 = left, 3 = right
    let count = [], visited = [];
    for (var i=0; i<strArr.length; i++) {
        for (var j=0; j<strArr[i].length; j++) {
            var row = strArr[i];
            if ((row[j - 1] === "1" || row[j + 1] === "1") && row[j] === "0") {
                strArr[i] = row.substr(0, j) + "2" + row.substr(j + 1);
            }
        }
    }
    findPath(strArr, 0, 0, -1, count, visited);
    if (count.length === 0) {
        return "not possible";
    } else if (count.indexOf(-1) !== -1) {
        return "true";
    } else {
        return count.length;
    }
}

function findPath(arr, i, j, changed, count, visited) {
    if (arr[i][j] === "0") {
        return;
    }
    if (arr[i][j] === "2") {
        if (changed !== -1) {
            return;
        } else {
            changed = i + "," + j;
        }
    }
    if (i === arr.length - 1 && j === arr[i].length - 1) {
        if (count.indexOf(changed) === -1) {
            return count.push(changed);
        }
    }
    if (visited[i + "," + j] === changed) {
        return;
    } else {
        visited[i + "," + j] = changed;
    }
    if (i !== 0) {
        findPath(arr, i - 1, j, changed, count, visited);
    }
    if (i !== arr.length - 1) {
        findPath(arr, i + 1, j, changed, count, visited);
    }
    if (j !== 0) {
        findPath(arr, i, j - 1, changed, count, visited)
    }
    if (j !== arr[i].length - 1) {
        findPath(arr, i, j + 1, changed, count, visited);
    }
}


matrixPath(["11100", "10011", "10101", "10011"]);