function checkMagazine(magazine, note) {

    // Write your code here

    const magMap = {};
    const noteMap={};
    let str;

    for (let word of note){
        if(word in noteMap){
            noteMap[word] = noteMap[word]+1;
        }
        else{
            noteMap[word] = 1;
        }
        console.log(word,noteMap[word] )

    }
    for (let word of magazine){
        if(word in note){
            magMap[word] = magMap[word]+1;
        }
        else{
            magMap[word] = 1;
        }
    }

    for(let word in noteMap){
        if( magMap[word] === undefined || magMap[word] < noteMap[word] ){
            console.log("No")
            return
        }
    }
    console.log("Yes")
    return
}

// checkMagazine([ 'two', 'times', 'three', 'is', 'not', 'four' ],[ 'two', 'times', 'two', 'is', 'four' ] )
checkMagazine([ 'give', 'me', 'one', 'grand', 'today', 'night' ],[ 'give', 'one', 'grand', 'today' ] )