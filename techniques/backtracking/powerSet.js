const final = [];
const powerSet = (s, i=0, current="") => {
    if (i === s.length) {
        final.push(current);
        return;
    }
    powerSet(s,i+1, current+s.charAt(i));
    powerSet(s,i+1, current);
};
let result = powerSet("abc");
console.log(final);