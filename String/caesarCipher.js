const caesarCipher = (str, num) => {
    let data = [];
    for (let val of str) {
        let charChode = val.charCodeAt(0);
        let current = /[a-zA-Z]/;
        const reg = new RegExp(current, 'g');
        if (val.match(reg)) {
            charChode = charChode + num;
        }
        data.push(String.fromCharCode(charChode));

    }
    return data.join('');
};
console.log(caesarCipher("Hello", 4));
console.log(caesarCipher("Caesar Cipher", 2));