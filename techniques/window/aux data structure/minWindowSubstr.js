// https://www.youtube.com/watch?v=PzAHfUY6GGk&t=151s
/**
 * BF
 */

/*function MinWindowSubstring(s, t) {
    let map = {};
    let final = s.slice(0);
    for (let i = 0; i < t.length; i++) {
        let char = t.charAt(i);
        map[char] = (map[char] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = i + t.length; j <= s.length; j++) {
            let count = t.length;
            let str = s.slice(i, j);
            let charMap = {...map}
            for (let k = 0; k < str.length; k++) {
                let char = str.charAt(k);
                if (char in charMap) {
                    if (charMap[char] > 0) {
                        count--;
                        charMap[char] = charMap[char] - 1
                    }
                }
            }
            if (count === 0) {
                if (str.length < final.length) {
                    final = str.slice(0);
                }
            }
        }
    }
    return final;
}*/
function MinWindowSubstring(s, t) {
    let minLength = Infinity;
    let charCount = t.length;
    let map = {};
    for (let i = 0; i < t.length; i++) {
        let char = t.charAt(i);
        map[char] = (map[char] || 0) + 1
    }
    let start = 0, end = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s.charAt(windowEnd)
        if (map[char] > 0) {
            charCount--;
        }
        map[char] = map[char] - 1;
        while (charCount === 0) {
            if (minLength > windowEnd - windowStart+1) {
                minLength = windowEnd - windowStart+1;
                start = windowStart;
                end = windowEnd+1;
            }
            let charL = s.charAt(windowStart);
            map[charL] = map[charL] + 1;
            if (map[charL] > 0) {
                charCount++;
            }
            windowStart++
        }
    }
    return minLength === Infinity ? "" : s.slice(start, end);
}

// keep this function call here
// console.log(MinWindowSubstring("krishnan", "ash"));//shna
// console.log(MinWindowSubstring("ahffaksfajeeubsne", "jefaa"));//
console.log(MinWindowSubstring("adobebanc", "abc"));//