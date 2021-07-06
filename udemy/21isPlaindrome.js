const fname = (str) => {
    if (str.length === 2) {
        if (str[0] === str[1]) {
            return true;
        }

    }
    if (str.length === 1) {
        return true;
    }
    if(str[0] === str.slice(-1)) return fname(str.slice(1,-1));
    return false;

};
console.log(fname('awesome'));
console.log(fname('unnu'));
