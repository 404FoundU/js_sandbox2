/*function FirstReverse(str) {

    let stack = [] ;
    let strArray = str.split('');

    while (strArray.length >0){
        let el = strArray.pop();
        stack.push(el);
    }
    str = stack.join("");
    console.log(stack.join());

    // code goes here
    return str;

}*/
function firstReverse(str) {
    let temp = '';
    for (let i = 0; i<str.length; i++) {
        temp = str[i] + temp;
    }
    // code goes here
    return temp;

}

// keep this function call here
firstReverse('test');