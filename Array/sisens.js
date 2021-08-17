/*
https://leetcode.com/problems/top-k-frequent-words/discuss/1356324/JavaScript-Solution-Heap-with-comments

Given the Alice In Wonderland text file, find the top 10 most frequent words.

https://s3-us-west-2.amazonaws.com/periscope-public/alice-in-wonderland.txt

Example output:

hello: 100
world: 72
...
test: 5

*/
const request = require('request');
let data;
request("https://s3-us-west-2.amazonaws.com/periscope-public/alice-in-wonderland.txt", async function (error, response, body) {
    // console.log(body)
    data = await body
    // console.log(body)
    let map = {}
    data = data.replace(/(\r\n|\n|\r)/gm, "");
    let dataArray = data.split(' ');
// console.log(dataArray)
    for (let el of dataArray) {
        if (el in map) {
            map[el] = map[el] + 1;
        } else {
            map[el] = 1;
        }
    }
    const entries = Object.entries(map);
    entries.sort((a, b) => {
        return b[1] - a[1];
    })

    for (let i = 0; i < 10; i++) {
        console.log(entries[i]
        )
    }
})




