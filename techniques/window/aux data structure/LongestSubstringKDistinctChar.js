//https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
//https://youtu.be/MK-NZ4hN7rs?t=1992
const longestSubstringKDistinctChar = (s, k) => {
    let map = {};
    let maxlength = 0;
    let windowStart = 0;
    let start = 0, end = 0
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s.charAt(windowEnd);
        map[char] = (map[char] || 0) + 1;
        while (Object.keys(map).length > k) {
            let leftChar = s.charAt(windowStart);
            map[leftChar]--;
            if (map[leftChar] === 0) {
                delete map[leftChar];
            }
            windowStart++;
        }
        if (maxlength < windowEnd - windowStart+1) {
            maxlength = windowEnd - windowStart+1;
            start = windowStart;
            end = windowEnd+1;
        }
    }
    return s.substring(start, end)
    // return maxlength

}
// let result = longestSubstringKDistinctChar('aa', 1)
let result = longestSubstringKDistinctChar('AAAHHIBC', 2)
console.log(result);