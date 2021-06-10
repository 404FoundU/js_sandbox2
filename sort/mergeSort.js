const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if (arr2.length > arr1.length) {
        result = [...result, ...arr2.slice(arr1.length - 1)]
    } else {
        result.concat(arr1.slice(arr2.length - 1));
    }
    console.log(result);
}



merge ([1, 10, 50], [2, 14, 99, 100]);


