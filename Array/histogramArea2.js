//https://www.youtube.com/watch?v=ZmnqCZp9bBs
function histogramArea(bars) {
    let maxArea = 0;

    // Iterate through bars from left to right
    for(var i = 0; i < bars.length; i++) {
        let bar = bars[i];

        maxArea = Math.max(maxArea, bar);


        // Iterate backwards and find possible largest area
        for(var j = i - 1; j >= 0; j--) {
            const width = i - j + 1;

            bar = Math.min(bar, bars[j]);

            maxArea = Math.max(maxArea, bar * width);
        }
    }

    // Return largest area
    return maxArea;

}

// keep this function call here
console.log(histogramArea([2, 1, 3, 4, 1]));
// console.log(histogramArea([6, 3, 1, 4, 12, 4]));
// console.log(histogramArea( [5, 6, 7, 4, 1]));
// console.log(histogramArea( [1, 1, 1, 1, 1, 1]));
