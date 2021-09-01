//https://leetcode.com/problems/longest-duplicate-substring/
const longestDuplicateSubstring = (s) => {
    const map = {};
    let maxlength = 0;
    let windowStart = 0;
    let start = 0, end = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s.charAt(windowEnd);
        if (map[char] === undefined ) {
            map[char] = 1;
        }
        else {
            map[char] = map[char] + 1;
            while (map[char] > 1) {
                let leftChar = s.charAt(windowStart);
                map[leftChar]--;
                if (map[leftChar] === 0) {
                    delete map[leftChar];
                }
                windowStart++;

            }
            if (maxlength < windowEnd - windowStart + 1) {
                maxlength = windowEnd - windowStart + 1;
                start = windowStart-1 ;
            }
        }

    }
    return s.substr(start, maxlength)
}
/*var longestDuplicateSubstring = function(s) {
    var myMap = new Map(); //key:  char, value: count
    var output = 0;
    var startIndex = 0;
    var endIndex = 0;

    for (endIndex; endIndex<s.length; endIndex++) {
        let char = s.charAt(endIndex);
        if (!myMap.has(char)  || myMap.get(char) === 0) {
            myMap.set(char,1);
        }
        else {
            myMap.set(char, myMap.get(char)+1)
            //slide window until count is < 2
            //when sliding, remove char at startIndex, as it is being incremented
            while(myMap.get(char) > 1) {
                let removeChar = myMap.get(s.charAt(startIndex));
                myMap.set(s.charAt(startIndex), removeChar-1);
                startIndex++;
            }
        }
        output = Math.max(output, endIndex-startIndex+1);
    }
    return output;
};*/
console.log(longestDuplicateSubstring("banana"));//ana
// console.log(longestDuplicateSubstring("abcd"));//""
// console.log(longestDuplicateSubstring("aa"));//""
console.log(longestDuplicateSubstring("zxcvdqkfawuytt"));//""