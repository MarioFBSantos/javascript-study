function sumSequence(begin, end, step){
    if(begin < end){
        let i = begin;
            let count = 0;
            do{
                console.log(i);
                count +=  i;
                i = i + step;
            }
            while(i <= end);
            return count
    }
    else{
        return 0;
    }
    
}
sumSequence(553, 537, 31);