const capitalizeFirst = (arr, newArr = []) => {
    if (arr.length === 0) {
        return  newArr;
    }
    else{
        let firstWord = arr[0][0].toUpperCase();
        let rest = arr[0].slice(1);
        newArr.push(firstWord.concat(rest));
    }
    return capitalizeFirst(arr.slice(1), newArr);


};

console.log(capitalizeFirst(['car', 'taco', 'banana']));; // ['Car','Taco','Banana']


//https://stackoverflow.com/a/28007054/9397387