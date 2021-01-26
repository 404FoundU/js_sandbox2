


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
function FirstReverse(a) {
    if (!a.length) return a;
    return FirstReverse(a.slice(1)).concat(a[0]);
}

// keep this function call here 
console.log(FirstReverse('test'));

//https://stackoverflow.com/a/28007054/9397387