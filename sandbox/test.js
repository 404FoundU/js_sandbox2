function solution(S, T) {
    // write your code in JavaScript (Node.js 8.9.4)
    const strS = [];
    const strT = [];
    for (let i = 0; i < S.length; i++) {
        if (Number.isInteger(parseInt(S[i]))) {
            for (let j = 0; j < parseInt(S[i]); j++) {
                strS.push('?');
            }
        } else {
            strS.push(S[i]);
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (Number.isInteger(parseInt(T[i]))) {
            for (let j = 0; j < parseInt(T[i]); j++) {
                strT.push('?');
            }
        } else {
            strT.push(T[i]);
        }
    }
    if (strS.length !== strT.length) {
        return false;
    }
    for (let k = 0; k < strS.length; k++) {
        // console.log(strS[k], '-', strT[k])
        if (strS[k] === '?' || strT[k] === '?') {
            continue;
        }
        if (strS[k] !== strT[k]) {
            return false;
        }
    }
    return true;
    // console.log(strS)
    // console.log(strT)
}