function sockMerchant(n, ar) {
    // Write your code here

    let freqCounter = {};

    const list = new Set(ar)
    list.forEach(el => {
        freqCounter[parseInt(el)] = 0;
    })
    let pairs = 0;
    for(let i=0; i<ar.length; i++){
        freqCounter[parseInt(ar[i])] = (freqCounter[ar[i]] + 1 ) || 0;
    }
    for (let key in freqCounter ){
        let val = freqCounter[key];
        let count = Math.floor(val/2);
        pairs += count;
    }
    return pairs;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));