function capitalizeFirst(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    else
    {
        let temp = arr[0][0].toUpperCase();
        let temp2 = arr[0].slice(1);
        newArr.push(temp.concat(temp2));
    }
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car', 'taco', 'banana']));; // ['Car','Taco','Banana']
