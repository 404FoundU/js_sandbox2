// https://www.youtube.com/watch?v=PzAHfUY6GGk&t=151s
/**
 * @return {string}
 */
function MinWindowSubstring(s, t) {
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
        /**
         * if count is 0 then increase l
         */
        while (count === 0) {
            /**
             * minlength
             */
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
}

// keep this function call here
console.log(MinWindowSubstring("krishnan", "ash"));//shna
console.log(MinWindowSubstring("ahffaksfajeeubsne", "jefaa"));//