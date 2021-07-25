// https://www.youtube.com/watch?v=y2BD4MJqV20
const longestPalindromeSubstring = s => {
    let longest = '';

    // this function finds the longest palindrome using the index as the middle
    const findLongestFromIndex = (str, i, j) => {
        let palindrome = '';
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            palindrome = str.slice(i, j + 1);
            i--;
            j++;
        }
        return palindrome;
    }

    for (let i = 0; i < s.length; i++) {
        // palindromes using one and two characters as the middle
        const palindrome1 = findLongestFromIndex(s, i, i);
        const palindrome2 = findLongestFromIndex(s, i, i + 1);
        const longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        }
    }

    return longest;
};
let result = longestPalindromeSubstring("babad");
console.log(result);
 result = longestPalindromeSubstring("cbbd");
console.log(result);