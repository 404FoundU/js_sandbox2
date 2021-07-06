//https://www.youtube.com/watch?v=1NzWlRP3yfI
const longestSubstringNonRepeating = (s) => {
    let count = 0;
    let l = 0;
    let f=0;
    let set = new Set();
    while (l < s.length && f < s.length) {
        let char = s.charAt(f);
        if (!set.has(char)) {
            set.add(char);
            f++;
            count = Math.max(count, f - l);
        } else {
            set.delete(s.charAt(l));
            l++
        }
    }
    return count
};
const result = longestSubstringNonRepeating('abcabcbb');
console.log(result);