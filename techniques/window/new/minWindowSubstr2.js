// https://www.youtube.com/watch?v=PzAHfUY6GGk&t=151s
/**
 * @return {string}
 */
function MinWindowSubstring(s, t) {
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
}

/*function MinWindowSubstring(s, t) {
    let minLength = Infinity;
    let count = t.length;
    let l = 0, r = 0;
    let start = 0, end = 0;
    let map = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = (map[t[i]] || 0) + 1;
    }
    while (r<s.length) {
        let charR = s.charAt(r);
        if (map[charR] > 0) {
            count--;
        }
        map[charR] = map[charR] - 1;
        r++
        /!**
         * if count is 0 then increase l
         *!/
        while (count === 0) {
            /!**
             * minlength
             *!/
            if ((r - l ) < minLength) {
                minLength = r - l ;
                start=l
                end = r
            }
            let charL = s.charAt(l);
            map[charL] = map[charL] + 1;
            if (map[charL] > 0) {
                count++;
            }
            l++;


        }
    }
    return minLength === Infinity ? "":s.substr(start, minLength)
}*/
// keep this function call here
// console.log(MinWindowSubstring("krishnan", "ash"));//shna
// console.log(MinWindowSubstring("ahffaksfajeeubsne", "jefaa"));//
console.log(MinWindowSubstring("adobebanc", "abc"));//