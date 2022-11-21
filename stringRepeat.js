function repeatString(n, s){
    const arr = [];
    for(let i = 0; i < n; i++){
        arr.push(s);
    }
    return arr.join('')
}

repeatString(5, "Hello")