var romanToInt = function(s) {
    var table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        // process corner cases like 'IV', 'XL' and so on
        if (
            (s[i - 1] === 'I' && (s[i] === 'V' || s[i] === 'X')) ||
            (s[i - 1] === 'X' && (s[i] === 'L' || s[i] === 'C')) ||
            (s[i - 1] === 'C' && (s[i] === 'D' || s[i] === 'M'))
        ) {
            console.log(s[i - 1]);
            console.log(table[s[i - 1]]);

            console.log(s[i]);
            console.log(table[s[i]]);


            console.log('===========')

            // substract value if it's corner case and add to sum
            sum += table[s[i]] - table[s[i - 1]];
            i--;
        } else {

            console.log(s[i], "s");
            console.log(table[s[i]], "table");
            sum += table[s[i]];
        }
    }

    return sum;
};
console.log(romanToInt('XLIV'));