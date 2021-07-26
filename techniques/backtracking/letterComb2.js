//okta
let map = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '12': 'l',
    '23': 'w'
}
//abc, aw, lc
const letterCombinations = () => {
    let input = '123';
    let result = [];
    let length = input.length;
    for (let i = 0; i < input.length; i++) {
        let first = input.slice(0, length - i)
        let rest = input.slice(length - i)
        let comb = []
        if (first.length === length) {
            first = first.split('');
            comb = [...first, ...rest]
        } else {
            comb = [first, rest];
        }
        let final = comb.map(el => map[el]);
        result.push(final.join(''))
    }
    return result
}
const lookup = (str) => {
    if (str === '') {
        return '';
    }
    let val = map[str];
    if (val === undefined) {
        str = str.split('');
    }
};
console.log(letterCombinations());
