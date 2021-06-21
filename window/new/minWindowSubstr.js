// https://www.youtube.com/watch?v=PzAHfUY6GGk&t=151s
/**
 * @return {string}
 */
function MinWindowSubstring(s, t) {
    let minLengthString = Infinity;
    let startIndex = 0;
    let charCount = t.length;
    const char = {};
    // create map of t
    for (let i = 0; i < t.length; i++) {
char[t[i]] = (char[t[i]] || 0) + 1;
    }

    // first pointer
    let l =0;
    let r = 0;

// conditional for first pointer

    while (r < s.length) {
        if (char[s[r]]>0) {
            charCount--;
        }
        char[s[r]]--;
        r++;//
        // set conditional for 2nd pointer
        while (charCount === 0) {
            if ((r - l) < minLengthString) {
                minLengthString = r - l;
                startIndex = l;
            }
            // secondpointer
            char[s[l]]++;
            if (char[s[l]] > 0) {
                charCount++;

            }
            l++;
        }
    }
return minLengthString===Infinity?'':s.substr(startIndex, minLengthString)
}

// keep this function call here
console.log(MinWindowSubstring("krishnan", "ash"));//shna
console.log(MinWindowSubstring("ahffaksfajeeubsne", "jefaa"));//