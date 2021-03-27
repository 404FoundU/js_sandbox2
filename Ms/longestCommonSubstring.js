// Substring https://www.youtube.com/watch?v=Lj90FqNCIJE
//subsequence https://www.youtube.com/watch?v=ASoaQq66foQ&t=3s
const lCS = (str1, str2) => {
    let m = str1.length;
    let n = str2.length;
    const memo = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    console.table(memo);

    let result = 0;

    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                memo[i][j] =memo[i-1][j-1] + 1;
                result = Math.max(result, memo[i][j]);
            } else {
                memo[i][j] = 0;
            }
        }
    }
    console.table(memo);

    return result;
};
console.log(lCS("unni", "unnt"));






