//https://leetcode.com/problems/permutation-in-string/

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
/*const permutationString = (s1,s2)=> {
    if(s1.length > s2.length) return false;

    const s1CharCount = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    for(let char of s1) {
        //'a'.charCodeAt() === 97;
        const idx = char.charCodeAt(0) - 97;
        s1CharCount[idx]++;
    }

    // construct window
    for(let i = 0; i < s1.length; i++) {
        const idx = s2[i].charCodeAt(0) - 97;
        window[idx]++;
    }

    let start = 0;
    let end = s1.length - 1;

    while(end < s2.length) {
        if(window.join('') === s1CharCount.join('')) return true;
        end++;
        if(end === s2.length) break;
        const startIdx = s2[start].charCodeAt() - 97;
        const endIdx = s2[end].charCodeAt() - 97;
        window[startIdx]--;
        window[endIdx]++;
        start++;
    }
    return false;
}*/
const permutationString = (s1,s2)=> {
    let m = new Map(); // map of frequency of chars in s1
    for(let a of s1) { m.set(a, m.get(a)+1 || 1); }

    let l = 0, r = 0, n = m.size; // n is number of uniq words in s1

    while(r<s2.length) { // increase r until the map is empty (n==0)
        let a = s2[r];
        if(m.has(a)) m.set(a, m.get(a)-1);  // if we found a char from s1 in s2, decrease freq
        if(m.get(a)==0) n--; // if we found all freq of that char, n--

        while(n==0) { // if we foud all freq of all characters of s1 in s2,
            let b = s2[l];
            if (r-l+1 == s1.length) return true; // if curr window matches s1 length then we found the answer
            if(m.has(b)) m.set(b, m.get(b)+1); // when moving window, add prev chars back
            if(m.get(b)>0) n++; // we did not find all the chars in required window
            l++; // keep  moving the window.
        }
        r++;
    }
    return false;
}
// let result = permutationString('ab', "eidbaooo" )
// let result = permutationString("ab", "eidboaoo");
let result = permutationString("abcdxabcde","abcdeabcdx" )

console.log(result);
// let result = permutationString('a', "ab" )