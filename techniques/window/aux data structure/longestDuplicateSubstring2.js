//https://leetcode.com/problems/longest-duplicate-substring/

var longestDuplicateSubstring = function(s) {
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
};
console.log(longestDuplicateSubstring("banana"));//ana
console.log(longestDuplicateSubstring("abcd"));//""