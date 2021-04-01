const overlappingRectangles = (strArr) => {
    let data = strArr.map(el => el
        .replace(/[()]/g, '')
        .split(',')
        .map(e => parseInt(e)))[0];
    let x1 = [], x2 = [];
    let y1 = [], y2 = [];
    let w1 = 0, w2 = 0, h1 = 0, h2 = 0, width = 0, height = 0;
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0 && !x1.includes(data[i])) {
            x1.push(data[i]);
        }
        if (i % 2 !== 0 && !y1.includes(data[i])) {
            y1.push(data[i]);
        }
    }
    for (let i = 8; i < 16; i++) {
        if (i % 2 === 0 && !x2.includes(data[i])) {
            x2.push(data[i]);
        }
        if (i % 2 !== 0 && !y2.includes(data[i])) {
            y2.push(data[i]);
        }
    }
    let overlap = false;
    let area1 = (x1[1] - x1[0]) * (y1[1] - y1[0]);
    if ((x1[0] < x2[0] && x1[1] > x2 [0]) || (x1[0] > x2[0] && x1[1] < x2 [0])) {
        overlap = true;
    } else {
        overlap = false;
    }
    if ((y1[0] < y2[0] && y1[1] > y2 [0]) || (y1[0] > y2[0] && y1[1] < y2 [0])) {
        overlap = true;
    } else {
        overlap = false;
    }
    if (overlap === false) {
        return 0;
    }
    if (x1[0] <= x2[0]) {
        w1 = Math.max(x1[0], x2[0]);
    } else {
        w1 = Math.min(x1[0], x2[0]);
    }
    if (x1[1] <= x2[1]) {
        w2 = Math.min(x1[1], x2[1]);
    } else {
        w2 = Math.max(x1[1], x2[1]);
    }
    if (y1[0] <= y2[0]) {
        h1 = Math.max(y1[0], y2[0]);
    } else {
        h1 = Math.min(y1[0], y2[0]);
    }
    if (y1[1] <= y2[1]) {
        h2 = Math.min(y1[1], y2[1]);
    } else {
        h2 = Math.max(y1[1], y2[1]);
    }
    if (w1 === w2) {
        width = w1;
    } else {
        width = w1 - w2;
    }
    if (h1 === h2) {
        height = h1;
    } else {
        height = h1 - h2;
    }
    let area = width * height;
    return Math.abs(Math.floor(area1 / area));
};
// console.log(overlappingRectangles(["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]));;
// overlappingRectangles(["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"]);
// overlappingRectangles(["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]);
// console.log(overlappingRectangles(["(0,0),(0,-2),(3,0),(3,-2),(2,-2),(3,-2),(2,20),(3,20)"]));
console.log(overlappingRectangles(["(0,0),(1,0),(0,1),(1,1),(0,0),(2,0),(0,-1),(2,-1)"]));