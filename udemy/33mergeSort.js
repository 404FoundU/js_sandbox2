const merge = (a1, a2) => {
    let arr = [];
    let i=0;
    let j=0;
    let l1 = a1.length;
    let l2 = a2.length;
    while (i < l1 && j < l2) {
        if (a1[i] < a2[j]) {
            arr.push(a1[i]);
            i++;
        } else {
            arr.push(a2[j]);
            j++;
        }
    }
    while (i < a1.length) {
        arr.push(a1[i]);
        i++;
    }while (j < a1.length) {
        arr.push(a1[j]);
        j++;
    }



    return arr;
};
merge([1, 10, 50], [2, 14, 99, 100]);