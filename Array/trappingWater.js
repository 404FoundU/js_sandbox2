const trappingWater = (arr) => {
    let length = arr.length;
    let area = 1;
    let waterHeight = [arr[0]];
    let h1, h2;
    for (let i = 0; i < length-1; i++) {
        if (typeof waterHeight[i] === 'undefined') {
            h1 = arr[i];
        } else {
            h1 = waterHeight[i];
        }

            h2 = arr[i + 1];

        waterHeight.push(Math.max(h1, h2));

    }
    arr.reverse();
    let waterHeight2 = [arr[0]];
    for (let i = 0; i < length-1; i++) {
        if (typeof waterHeight2[i] === 'undefined') {
            h1 = arr[i];
        } else {
            h1 = waterHeight2[i];
        }

        h2 = arr[i + 1];

        waterHeight2.push(Math.max(h1, h2));

    }
    waterHeight2.reverse();
    arr.reverse();
    for (let i = 0; i < length-1; i++) {
        let minHeight = Math.min(waterHeight2[i], waterHeight[i]) - arr[i];
        area = area + minHeight;

    }
    return area;
};
console.log(trappingWater([0, 2, 4, 0, 2, 1, 2, 6]));
// console.log(trappingWater([3, 0, 0, 2, 0, 4]));