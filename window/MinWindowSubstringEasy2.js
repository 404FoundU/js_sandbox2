// https://www.youtube.com/watch?v=PzAHfUY6GGk&t=151s
/**
 * @return {string}
 */
function MinWindowSubstring(s, t) {
    const char = {};
    let minLength = Number.MAX_SAFE_INTEGER;
    let minStartIndex = 0;
    let charCount = t.length;
    for (let i = 0; i < t.length; i++) {
        char[t[i]] = (char[t[i]] || 0) + 1;
    }
    for (let left = 0, right = 0; right < s.length;) {
        if (char[s[right]] > 0) {
            charCount--;
        }
        char[s[right]]--;
        right++;

        while (charCount === 0) {
            if (right - left < minLength) {
                minLength = right - left;
                minStartIndex = left;
            }
            char[s[left]]++;
            if (char[s[left]] > 0) {
                charCount++;
            }
            left++;
        }
    }
    return minLength === Number.MAX_SAFE_INTEGER ? '' : s.substr(minStartIndex, minLength);
}

// keep this function call here
console.log(MinWindowSubstring("krishnan", "ash"));//shna
