//https://leetcode.com/problems/robot-bounded-in-circle/
const robot = (instructions) => {
    let dir = instructions.split('');
    let start = [0, 0]
    let angle = 0;
    let pos = [0, 0]

    let degreeMap = {
        "0": [0, 1],
        "-90": [-1, 0],
        "270": [-1, 0],
        "90": [1, 0],
        "-270": [1, 0],
        "180": [0, -1],
        "-180": [0, -1],
    }
    let currentDir;
    for (let i = 0; i < 4; i++) {
        for (let d of dir) {
            if (d === 'G') {
                currentDir = degreeMap[angle.toString()];
                pos = [pos[0] + currentDir[0], pos[1] + currentDir[1]];
            }
            if (d === 'L') {
                angle = angle - 90
            }
            if (d === 'R') {
                angle = angle + 90
            }
            if (angle === -360 || angle === 360) {
                angle = 0;
            }
        }
    }

    if (JSON.stringify(pos) === JSON.stringify(start)) {
        return true;
    }
    return false;
}
console.log(robot("GGLLGG"));
console.log(robot("GG"));
console.log(robot("GL"));
