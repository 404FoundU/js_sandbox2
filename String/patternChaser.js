const patternChaser = (str) =>{
    let result = [];
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        let el = str[i];
        let index = str.indexOf(el);
        let lastIndex = str.lastIndexOf(el);
        if (index !== lastIndex) {
            let candidate = el;
            let j = index;
            while (lastIndex < str.length) {
                if (str[++index] === str[++lastIndex]) {
                    candidate = candidate + str[index];
                    j++;
                    continue;
                }
                break;
            }
            result.push(candidate);


        }
    }
    for (let val of result) {
        if (val.length > longest.length) {
            longest = val;
        }
    }
    // return longest;
    return result;
}
console.log(patternChaser("sskfssbbb9bbb"));
// console.log(patternChaser("da2kr32a2"));