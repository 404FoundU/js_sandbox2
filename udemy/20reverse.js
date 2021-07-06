const fname = (str) => {
    let revStr = '';
    if (str.length <= 1) {
        return str;

    }
    return fname(str.slice(1)) + str[0];
};
console.log(fname('awesome'));
console.log(fname('innu'));
