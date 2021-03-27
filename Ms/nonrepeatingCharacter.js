// create char map and count char
// 

const nonrepeatingCharacter = (str) =>{
    /*let charMap = {};
    for (let el of str) {
        
        charMap[el] = (charMap[el] || 0) + 1; 
    }
    for (let property in charMap) {
        if (charMap.hasOwnProperty(property) && charMap[property] === 1) {
            return property;
        }
    }
    */

    for(let i=0;i<str.length;i++){
        let temp1 = str.indexOf(str[i]);
        let temp2 = str.lastIndexOf(str[i]);
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])) return str[i];
    }


};
console.log(nonrepeatingCharacter("abcdef"));
console.log(nonrepeatingCharacter('hello world hi hey'));
