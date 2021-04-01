const matrixSpiral = (strArr) => {

    let m = strArr.map(el => el
        .replace('[', '')
        .replace(']', '')
        .split(',')
        .map(e => e
            .replace(' ', '')
            )
    );
    let left = 0;
    let right = m[0].length - 1;
    let top = 0;
    let bottom = m.length-1;
    let size = m[0].length * m.length;
    let data = [];
    while (size !== data.length) {
        for (let i = left; i <= right; i++) {
            data.push(m[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && size !== data.length; i++) {
            data.push(m[i][right]);
        }
        right--;
        for (let i = right; i >= left && size !== data.length; i--) {

            data.push(m[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && size !== data.length; i--) {

            data.push(m[i][left]);
        }
        left++;
    }
    return data.join();
};
// console.log(matrixSpiral(["[1, 2]", "[10, 14]"]));;
// console.log(matrixSpiral(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]));;
// console.log(matrixSpiral(["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"]));;
console.log(matrixSpiral( ["[1, 2, 3, 4, 5]", "[4, 5, 6, 7, 8]", "[7, 8, 9, 10, 11]", "[14, 3, 2, 1, 3]", "[6, 7, 3, 2, 1]"]));;