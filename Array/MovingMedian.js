// https://coderbyte.com/editor/Moving%20Median:JavaScript
const movingMedian = (arr) => {
    let sw = arr.shift();
    if (sw % 2 === 0) {
        return '';
    }
    let median = Math.floor(sw / 2);
    let data = [];
    let firstEl = arr[0];
    for (let i = 0; i < sw - 1 && i < arr.length; i++) {
        data.push(firstEl);
        if (firstEl > 0) {
            firstEl++;
        }
    }

    function calculateMovingMedian(a) {
        a.sort((el1,el2) => {
            return el1 - el2;
        });
        data.push(a[median]);
    }

    for (let j = 0; j < arr.length - sw + 1; j++) {
        calculateMovingMedian(arr.slice(j, j + sw ));
    }
    return (data.join());
}
movingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1]);

