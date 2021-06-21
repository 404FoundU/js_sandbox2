//https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
//https://www.youtube.com/watch?v=dueKwLU6YKo

var letterCombinations = function(digits) {

    if(digits.length===0){
        return [];
    }

    let map = [
        null,
        null,
        ["a","b","c"],
        ["d","e","f"],
        ["g","h","i"],
        ["j","k","l"],
        ["m","n","o"],
        ["p","q","r", "s"],
        ["t","u","v"],
        ["w","x","y", "z"]

    ];
    let queue=[" "];
    let final = []

    for(let digit of digits){

        let length = queue.length

        for(let i=0; i<length; i++){

            let lookUp = map[digit];
            let pop = queue.shift();

            lookUp.forEach(letter => {
                let newLetter = pop + letter;
                queue.push(newLetter.trim())
            })

        }



    }
    return queue;

};