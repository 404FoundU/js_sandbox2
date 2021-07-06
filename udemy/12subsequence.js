const avgPair = (str1, str2) => {
    if (str1.length > str2.length) {
        return false;
    }
    let p1 = 0;
    let p2 = 0;
    while (p1 < str1.length && p2< str2.length) {
        if (str1[p1] === str2[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        }
    }
    return p1 === str1.length;

};
console.log(avgPair("hello", "hello world"));
console.log(avgPair("sing", "sting"));
console.log(avgPair("abc", "acb"));