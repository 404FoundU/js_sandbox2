//https://coderbyte.com/solution/Min%20Window%20Substring#JavaScript


 function MinWindowSubstring(strArr) {
    let str = strArr[0];
    let needle = strArr[1].split('');
    let len = str.length;
    //start with the smallest possible substrings, then go up
    for (let i = needle.length; i <= len; i++) {
        for (let j = 0; j <= len - i; j++) {
            let mySlice = str.substr(j, i);
            if (isContained(mySlice)) {
                return mySlice;
            }
        }
    }
    return 'Not in string';
    function isContained(str) {
        let arr = str.split('');
        for (let i = 0, len = needle.length; i < len; i++) {
            let place = arr.findIndex(val => {
                let temp1 = needle[i];
                let temp = val === needle[i];
                return temp;
            });
            if (place === -1) {
                return false;
            } else {
                arr.splice(place, 1);
            }
        }
        return true;
    }
}

// keep this function call here
console.log(MinWindowSubstring(["krishnan", "ash"]));//shna
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));