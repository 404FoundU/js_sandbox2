//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true
function sockMerchantMap(n, ar) {
    // Write your code here
    let i=0;
    let j=i+1;
    let newArr = [];
    ar.sort();
    while (j < ar.length) {
        if (ar[i] === ar[j]) {
            newArr.push([ar[i], ar[j]]);
            i=j+1;
        }
        else{
            i=j;
        }
        j=i+1;
    }
    return newArr.length;
}

console.log(sockMerchantMap(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));