/*function longestWord(sen) {
    sen = sen.replace(/[^\w\s]/gi, '');

    let wordArr = sen.split(' ');
    // console.log(wordArr);
    let longest = '';
    for (let val of wordArr){
// console.log(val);
        if(val.length > longest.length){
            longest = val;
        }
    }

    // code goes here
    return longest;

}*/
function longestWord(sen) {
    sen = sen.replace(/[^\w\s]/gi, '').split(' ');
    return _LongestWord(sen, '');


}
function _LongestWord(sen){
    if(sen.length===1)
    {
        return sen[0];
    }
    if (sen[0].length >= sen[1].length) {
        sen.splice(1,1);
        return _LongestWord(sen);
    }
    if (sen[0].length <= sen[1].length) {
        sen.splice(0,1);
        return _LongestWord(sen);
    }


}
// keep this function call here
console.log(longestWord("I love dogs"));