//https://leetcode.com/problems/permutation-in-string/
//https://leetcode.com/problems/permutation-in-string/discuss/1109949/Javascript-with-comments-sliding-window-using-hash-Map
/*
Brute force
 */
/*const permutationString = (s1,s2)=> {
    const perm = [];
    if(s1.length===0){
        return false
    }
    if (s1.length === 1) {
        perm.push(s1);
    }
    else{
        for (let i = 0; i < s1.length; i++) {
            for (let j = 0; j < s1.length; j++) {
                if (i !== j) {
                    perm.push(s1.charAt(i)+ s1.charAt(j))
                }
            }
        }
    }

    let window = perm[0].length;
    for (let i = 0; i < s2.length-window+1; i++) {
        let str = s2.slice(i, i + window);
        if (perm.includes(str)) {
            return true
        }
    }

    return false
}*/
const permutationString = (s1, s2) => {
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        let char = s1.charAt(i);
        map[char] = (map[char] || 0) + 1
    }
    let windowStart = 0// n is number of uniq words in s1
    let charCount = Object.keys(map).length;
    for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        let char = s2.charAt(windowEnd);
        if (char in map) {
            map[char]--;
        }
        if (map[char] === 0) {
            charCount--;
        }
        while (charCount === 0) { // if we foud all freq of all characters of s1 in s2,
            if (s1.length === windowEnd - windowStart + 1) return true;
            let leftChar = s2.charAt(windowStart);
            if (leftChar in map) {
                map[leftChar]++;
            } // when moving window, add prev chars back
            if (map[leftChar] > 0) {
                charCount++;
            }
            windowStart++;
        }
    }
    return false;
}
// let result = permutationString('ab', "eidbaooo")
// let result = permutationString("ab", "eidboaoo");
// let result = permutationString('a', "ab" )
let result = permutationString("abcdxabcde","abcdeabcdx" )
console.log(result);