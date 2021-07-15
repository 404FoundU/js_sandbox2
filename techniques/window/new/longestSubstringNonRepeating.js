//https://www.youtube.com/watch?v=1NzWlRP3yfI
//brute force
/*const longestSubstringNonRepeating = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let chari= s.charAt(i);
        let set = new Set([chari]);
        for (let j = i+1; j <s.length; j++) {
            let charj = s.charAt(j);
            if (set.has(charj)) {
                break;
            } else {
                set.add(charj);
            }
            count = Math.max(count, set.size);
        }
    }
    return count
}*/
const longestSubstringNonRepeating = (s) => {
    let count = 0;
    let l = 0, r = 0;
    let set = new Set();
    while (l < s.length && r < s.length) {
        let char = s.charAt(r)
        if (set.has(char)) {
            set.delete(char);
            l++;
        }
        else{
            set.add(char);
            r++;
            count = Math.max(count, r - l);
        }
    }
    return count;
};
const result = longestSubstringNonRepeating('abcabcbb');
console.log(result);