const rankTranform = (arr) => {
    const list = [...arr]
    list.sort((a, b) => a - b);
    let rank = 0;
    let result = [];
    let map = {};
    for (let i = 0; i <list.length; i++) {


        if (i > 0 && list[i] === list[i - 1]) {
            rank--;
        }
        rank++;
        map[list[i]] = rank;
    }
    for (let el of arr) {
        let r = map[el];
        result.push(r)
    }


    return result
}
// let a =  [40,10,20,30]
let a =  [37,12,28,9,100,56,80,5,12]
// let a =  [100,100,100]
console.log(rankTranform(a));