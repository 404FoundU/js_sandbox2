// sliding windows

function sameFreq(num1, num2){
    num1 = (""+num1).split("");
    num2 = (""+num2).split("");
    if (num1.length !== num2.length) {
        return true;
    }
    let freqCount = [];
    for (let num of num1) {
        freqCount[num] = freqCount[num] ? freqCount[num] + 1 : 1;
    }
    for (let num of num2) {
        if (!freqCount[num]) {
            return false;
        } else {
            freqCount[num] -= 1;
        }
    }
    return true;
}



console.log(sameFreq(1822,2821));
console.log(sameFreq(34,14));
