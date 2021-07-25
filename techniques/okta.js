let map = {
    1:'a',
    2:'b',
    3:'c',
    12:'l',
    23:'w'
}

const letterCombinations = () => {
    let input = '123';
    const double = [];
    let single = [];
    let result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j <= input.length; j++) {
            let str = input.slice(i, j);
            if (str.length === 1) {
                single.push(map[str]);
            }
            if (str.length === 2) {
                double.push(map[parseInt(str)])
            }
        }
    }
    result.push(single.join(''))
    result = [...result, ...double]

    return result

}
console.log(letterCombinations());