function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = S.split(/\n/).map(v => v.split(','))
    let str2 = [...str]
    let cityCountMap = {};
    let cityCounterMap = {};
    // console.log(str)
    let final = []
    let result = []
    for (let photo of str) {
        let city = photo[1]
        if (city in cityCountMap) {
            cityCountMap[city] = cityCountMap[city] + 1
        } else {
            cityCountMap[city] = 1
            cityCounterMap[city] = 1;
        }
    }
//  console.log(cityCounterMap)
    // create city, date]
    let sorted = str.sort((a, b) => {
        let date1 = new Date(a[2]);
        let date2 = new Date(b[2]);
        return date1 - date2
    })
    for (let i = 0; i < sorted.length; i++) {
        let photo = sorted[i]
        let city = photo[1]
        let date = photo[2];
        let ext = photo[0].split('.');
        let total = cityCountMap[city];
        let length = total.toString().length;
        let number = cityCounterMap[city].toString()
        if (length === 2 && cityCounterMap[city] < total) {
            number = '0' + number;
        }
        cityCounterMap[city] = cityCounterMap[city] + 1;
        let name = city + number + '.' + ext[1]
        final.push([name, date])
    }
    for (let photo of str2) {
        let date = photo[2];
        // console.log('city', photo[1])
        for (let pic of final) {
            let picDate = pic[1];
            if (date === picDate) {
                result.push(pic[0])
            }
        }
    }
    return result;
}

