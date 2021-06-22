//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true
function sockMerchantMap(n, ar) {
    // Write your code here
    const arMap = new Map();
    const list = new Set(ar)
    list.forEach(el => {
        arMap.set(el, 0);
    })
    let pairs = 0;
    for (let i = 0; i < ar.length; i++) {
        let value = arMap.get(ar[i]);
        arMap.set(ar[i], value + 1);
    }
    arMap.forEach((val, key) => {
            let count = Math.floor(val / 2);
            pairs += count;
        }
    )
    return pairs;
}

console.log(sockMerchantMap(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));