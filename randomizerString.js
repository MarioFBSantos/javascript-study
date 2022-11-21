function randomize(string){

    const arr = string.split(' ');
    const newArr = [];

    arr.forEach(function(item){
        
        if(item.length >= 5){
            let reverse = item.split("");
            reverse = reverse.reverse().join("");
            newArr.push(reverse);
        }
        else{
            newArr.push(item);
        }
    })
    
    console.log(newArr.join(" "));
}
randomize("Hey Welcome warriors");