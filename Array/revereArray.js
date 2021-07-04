const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);


function areTheyEqual(array_a, array_b){
    // Write your code here
    for(let i=0; i<array_a.length-1; i++){
        let result = [];
        let first = array_a.slice(0, i+1);
        let rest = array_a.slice(i+1).reverse()
        result = [...first, ...rest]
        console.log(result, 'r')
        console.log(array_b, 'b')
        console.log(equals(result,array_b))
        console.log(result===array_b)
        if(result===array_b){
            return true;
        }
    }
    return false

}

areTheyEqual([1,2,3,4], [1,4,3,2])