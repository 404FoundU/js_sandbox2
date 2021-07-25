//https://www.youtube.com/watch?v=mEBEw_xScsE

const palindromeString = (s, left = 0, right = s.length - 1) => {
    if (s.charAt(left) === s.charAt(right)) {
        return true;
    }if (s.charAt(left) !== s.charAt(right)) {
        return false;
    }

    palindromeString(s, left + 1, right - 1);
};
let result = palindromeString('abcba');
console.log(result);