// https://coderbyte.com/editor/Pattern%20Chaser:JavaScript
const patternChaser = (str) =>{
    let len = str.length;
    let halfLen = Math.floor(len/2);

    for(let i = halfLen; i>1; i--){
        for(let j=0; j<len -i; j++){
            let text = str.substr(j,i);
            let regText = new RegExp(text,'g');
            let textString = str.match(regText);
            if(textString.length>1){
                return 'yes ' + text;
            }
        }
    }

    return 'no null';
}
console.log(patternChaser("sskfssbbb9bbb"));
// console.log(patternChaser("da2kr32a2"));