//https://leetcode.com/problems/find-all-anagrams-in-a-string/

const allAnagrams = (s, p) =>{
    let pMapCopy = {};
    for (let i = 0; i < p.length; i++) {
        let char = p.charAt(i)
        pMapCopy[char] = (pMapCopy[char] || 0) + 1;
    }
    let charCount = p.length
    let result = [];
    let windowStart = 0
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s.charAt(windowEnd);
        if (pMapCopy[char] !== undefined && pMapCopy[char] >0) {
            charCount--;
        }
        pMapCopy[char]--;

        while (charCount === 0 ) {
            if (windowEnd - windowStart + 1 === p.length) {
                result.push(windowStart);
            }
            let charL = s.charAt(windowStart);
            pMapCopy[charL]++;
            if (pMapCopy[charL] > 0) {
                charCount++;
            }
            windowStart++;
        }
    }
    return result;
}
let r = allAnagrams("abaacbabc","abc");
// let r = allAnagrams("abacbabc","abc");
// let r = allAnagrams('abab', 'ab');
// let r = allAnagrams('cbaebabacd', 'abc');
console.log(r);