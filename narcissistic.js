function narcissistic(value = 371){

    const total = Object.entries({...String(value)});
    const len = total.length;
    let count = 0;

    for(let i = 0; i < len; i++) {
        count = count +  total[i][1] ** total.length
    }

    if(count == value){
        return true;
    }
}

narcissistic();