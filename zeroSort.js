
function sort(arr){
    arr.forEach(function(item, index){
        if(item === 0){
            const flag = arr.splice(index, 1);
            arr.push(0);
    }
    })
    console.log(arr);
}

sort([false,1,0,1,2,0,1,3,"a"]);