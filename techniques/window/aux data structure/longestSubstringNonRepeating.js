//https://www.youtube.com/watch?v=1NzWlRP3yfI
//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//brute force


const longestSubstringNonRepeating = (s) => {
    let map = {};
    let maxlength = 0;
    let windowStart = 0;
    let start = 0, end = 0
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s.charAt(windowEnd);
        map[char] = (map[char] || 0) + 1;
        while (map[char] > 1) {
            let leftChar = s.charAt(windowStart);
            map[leftChar]--;

            windowStart++;
        }
        if (maxlength < windowEnd - windowStart+1) {
            maxlength = windowEnd - windowStart+1;
            start = windowStart;
            end = windowEnd+1;
        }
    }
    return maxlength
};
// const result = longestSubstringNonRepeating('abcabcbb');
const result = longestSubstringNonRepeating("pwwkew");
console.log(result);