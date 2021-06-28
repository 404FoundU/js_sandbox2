//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function sherlockAndAnagrams(s) {
    let map = {};
    let count = 0;
    /**
     * kkkk can be split into
     * k    k   k   k
     * kk   kk  kk
     * kkk  kkk
     * kkkk
     *
     * In row 1, k can have 6 combinations
     * Formula is (n-1)+(n-2)+(n-3)+(n-4)
     */
    for (let i = 0; i < s.length; i++) {
        /**
         * Remove the first character from beginning
         */
        let word = s.slice(i)
        /**
         * Sort the word alphabetically and add to map
         */
        let sortedWord = word.split('').sort().join('');
        if (sortedWord in map) {
            map[sortedWord] = map[sortedWord] + 1;
        } else {
            map[sortedWord] = 1
        }
        for (let j = 1; j < word.length; j++) {
            /**
             * For each word, remove the ending character
             */
            let newWord = word.slice(0, word.length - j)
            /**
             * Sort the word alphabetically and add to map
             */
            newWord = newWord.split('').sort().join('')
            if (newWord in map) {
                map[newWord] = map[newWord] + 1;
            } else {
                map[newWord] = 1
            }
        }
    }
    /**
     * Map will have each word with wordCount
     */
    for (let item in map) {
        if (map[item] > 1) {
            let l = map[item];
            /**
             * Apply formula and add to count
             */
            for (let i = 1; i < l; i++) {
                count += l - i;
            }
        }
    }
    return count;
}