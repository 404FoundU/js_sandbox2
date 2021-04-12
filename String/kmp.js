//https://www.youtube.com/watch?v=V5-7GzOfADQ
//https://www.youtube.com/watch?v=4jY57Ehc14Y
//LPS - longest prefix that is also suffix
const kmpSearch = (pattern, target) => {
    let n = target.length;
    /*   pattern=pattern.split('');
      pattern.unshift('0');
      pattern = pattern.join('');*/
    let m = pattern.length;
    const lps = Array(m).fill(0);

    function computeLPSArray(pattern, m, lps) {
        let len = 0;
        let i = 1;
        lps[0] = 0;
        while (i < m) {
            if (pattern[i] === pattern[len]) {
                lps[i] = len + 1;
                len++;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i = i + 1;
                }

            }
        }

    }

    computeLPSArray(pattern, m, lps);
    let i = 0;
    let j = 0;
    while (i < n - m + 1) {
        if (target[i] === pattern[j]) {
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        if (j === m) {
            printString(i - j);
            j = lps[j - 1];
        }
    }
};
kmpSearch('onions', 'onionionspl');