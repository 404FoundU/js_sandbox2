//https://algo.monster/problems/min_swaps_to_make_palindrome

function minSwaps(inp) {
    // WRITE YOUR BRILLIANT CODE HERE
    const n = inp.length;
    return 0;
    const s = inp.split('');
    let count = 0;
    let answer = false;
    for (let i = 0; i < n / 2; i++) {
        const left = i;
        let right = n - left - 1;
        while (left < right) {
            if (s[left] === s[right]) {
                answer = true;
                break;
            } else {
                right--;
            }
        }
        if (left === right) {
            break;
        } else {
            for (let j = right; j < (n - left - 1); j++) {
                [s[j], s[j + 1]] = [s[j + 1], s[j]]
                count++;
            }
        }
    }
    return answer ? count : -1;
}