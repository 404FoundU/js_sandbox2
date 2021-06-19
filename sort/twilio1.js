'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'itemsSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY items as parameter.
 */

function itemsSort(items) {
    // Write your code here
    let count = 0;
    let maxCount = 0;
    let arr = [];
    let finArr = [];
    //sort
    items.sort((a,b)=>{
        return a-b;
    })

    // console.log(items);
    const newItems=[];
    const duplicateItems=[];
    const singleItems=[];
    for(let i=0; i<items.length;i++){
        // console.log(items[i]);

        if(newItems.includes(items[i])){
            duplicateItems.push(items[i]);
            duplicateItems.push(items[i]);
            let index = newItems.indexOf(items[i]);
            console.log(index);
            newItems.splice(index,1)
        }
        else{
            newItems.push(items[i]);
        }


    }

    // console.log(duplicateItems);
    // console.log(newItems);
    const finalItem = newItems.concat(duplicateItems);
    console.log(finalItem);
    // return finalItem;

}

function main() {




}





