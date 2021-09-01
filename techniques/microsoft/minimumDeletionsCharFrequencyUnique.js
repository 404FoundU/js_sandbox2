//https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
const minimumDeletionsCharFrequencyUnique = (s) => {
    const map = {};
    let maxValue = 0;
    let maxKey = "";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        map[char] = (map[char] || 0) + 1
        if (maxValue < map[char]) {
            maxValue = map[char];
            maxKey = char;
        }
    }
    const entries = Object.entries(map);
    entries.sort((a, b) => {
        return b[1] - a[1];
    })
    // const visited = new Set();
    // visited.add(maxValue);
    for (let i = 0; i < entries.length - 1; i++) {
        let first = entries[i];
        let second = entries[i + 1];
        let firstVal = first[1];
        let secondVal = second[1];
        if (firstVal > secondVal) {
            continue;
        }
        if (firstVal === secondVal) {
            secondVal--;
            second.splice(1, 1, secondVal);
            count++;
        }
        if (firstVal < secondVal) {
            let actualSecondVal = secondVal
            let diff = secondVal - firstVal + 1;
            secondVal -= diff;
            second.splice(1, 1, secondVal);
            if (secondVal >= 0) {
                count += diff;
            } else {
                count += actualSecondVal;
            }
        }
    }

    return count;
}
// console.log(minimumDeletionsCharFrequencyUnique("aaabbc"));
// console.log(minimumDeletionsCharFrequencyUnique("aaabbbcc"));
// console.log(minimumDeletionsCharFrequencyUnique("aab"));
// console.log(minimumDeletionsCharFrequencyUnique("accdcdadddbaadbc"));
// console.log(minimumDeletionsCharFrequencyUnique("ceabaacb"));
// console.log(minimumDeletionsCharFrequencyUnique("abcabc"));
console.log(minimumDeletionsCharFrequencyUnique("abcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwzabcdefghijklmnopqrstuvwxwz"));
// console.log(minimumDeletionsCharFrequencyUnique("abcabc"));//3
// console.log(minimumDeletionsCharFrequencyUnique("abcabcabc"));
// console.log(minimumDeletionsCharFrequencyUnique("bbcebab"));//2
console.log(minimumDeletionsCharFrequencyUnique("adec"));//3