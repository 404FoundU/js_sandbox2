//https://www.youtube.com/watch?v=eS6PZLjoaq8
//
function MinWindowSubstring(strArr) {
    let str = strArr[0];
    let matchStr = strArr[1];
    let start = -1;
    let end = -1;
    let index = -1;
        [...matchStr].forEach(el => {


            if (start < 0 && end < 0) {
            start = str.indexOf(el);
            end = start;
        } else {
            let indices = findAllIndices(el, str);
            indices.forEach(idx => {
                if (idx < start) {
                    start = index;
                }
                if (idx > end) {
                    end = index;
                }
            })

        }
    });
    console.log(start);
    console.log(end);
    return str.slice(start, end+1);
    // code goes here

}
function findAllIndices(el, str) {
    let indices = [];
    let idx = str.indexOf(el)
    while ( idx !== -1) {
        indices.push(idx);
        idx = str.indexOf(el, idx + 1);
    }
    return indices;
}
// keep this function call here
console.log(MinWindowSubstring(["krishnan", "ash"]));//shna
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));