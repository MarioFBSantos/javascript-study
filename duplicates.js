function duplicates(text){

    // const textBackup = text.toLowerCase().split('').sort();
    // const occurences = textBackup.reduce(function(acc, current){
    //     return acc[current] ? ++acc[current]: acc[current] = 1, acc
    // }, {})
    // const count = 0;

    const textArr  = text.toLowerCase().split('').sort()
    let count = 0;
    let occurences = 0;

    for(let i = 0; i < textArr.length; i++){
        console.log(textArr[i], textArr[i + 1]);
        if(textArr[i] == textArr[i + 1]){
            if(count == 0){
                ++occurences;
            }
            count++;
        }
        else{
            count = 0;
        }
    }
    console.log(occurences);
}

duplicates("Indivisibilities");