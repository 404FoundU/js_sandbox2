const codeLandUsername = (str) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g;
    return str.length >= 4 && str.length <= 25 && regex.test(str)

};
console.log(codeLandUsername('u__hello_world123'));