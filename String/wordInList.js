//https://leetcode.com/discuss/interview-question/1397869/Compass-Online-Assessment-Questions
// karat
const wordInList = (words, str) => {
    let list = {};
    for (let letter of str) {
        list[letter] = (list[letter] || 0) + 1;
    }

    for (let word of words) {
        const wLength = word.length;
        let count = 0;
        const list2 = {...list}
        for (let letter of word) {
            if (list2[letter] !== undefined && list2[letter]>0) {
                count++;
                list2[letter] = list2[letter] -1 ;
            }
        }
        if (wLength===count) {
            return word
        }
    }
    return '';
}
let words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
let string1 = 'tcabnihjs'
let string3 = 'baykkjl'
let string4 = 'bbabylkkj'


console.log(wordInList(words, string1));;
console.log(wordInList(words, string3));;
console.log(wordInList(words, string4));;
console.log(wordInList(words, 'ccc'));;
console.log(wordInList(words, 'nbird'));;
