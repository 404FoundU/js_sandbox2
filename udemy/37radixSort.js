const digitCount = num => {
	return Math.floor(Math.log10(num)) + 1;
};
const maxDigitFinder = arr => {
	let maxDigit = 0;
	for (let value of arr) {
		maxDigit = Math.max(digitCount(value));
	}
	return maxDigit;
};
const getDigit = (num, i) => {
	return Math.floor( Math.abs(num) / Math.pow(10, i) % 10);
};

const radixSort = (arr) => {
    let maxDigit = maxDigitFinder(arr);
    for (let k = 0; k < maxDigit; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);

	}



	return arr;
};
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
