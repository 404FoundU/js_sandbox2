const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

const pivotHelper = (arr, start, end=arr.length+1) =>{
    const pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        // pivot> current
        if (pivot > arr[i]) {
            swapIndex++;
            //swap current element to pivot index
            swap(arr, i, swapIndex);
        }

    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivotHelper(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

// pivotHelper([4, 8, 2, 1, 5, 7, 6, 3], 0);
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));