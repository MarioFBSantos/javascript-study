function notContains(){
    array1=[1,2,3,5];
    array2=[1,2,3,4,5];

    const notContains = array1.filter(x=> !array2.includes(x)).concat(array2.filter(x=> !array1.includes(x)));
    console.log(notContains);
}

notContains();