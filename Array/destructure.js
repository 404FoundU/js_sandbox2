const arr = [ 5, 'b', 4, 'd', 'e', 'f', 2 ];
const {
    6: x,           // x = 2
    0: y,           // y = 5
    2: z,           // z = 4
    length: count,  // count = 7
    name = 'array', // name = 'array' (not present in arr)
    ...restData     // restData = { '1': 'b', '3': 'd', '4': 'e', '5': 'f' }
} = arr;
const {
     // name = 'array' (not present in arr)
    ...restData2     // restData = { '0': 5, '1': 'b', '2': 4, '3': 'd', '4': 'e', '5': 'f', '6': 2 }

} = arr;
console.log(restData);
console.log(restData2); //