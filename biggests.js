function biggests(arr) {

const largest = [];
    for(let i = 0; i < arr.length; i++) {
        largest.push(arr[i].sort((a,b) => b-a)[0]);
    }

    // return largest;
    console.log(largest);
}

biggests([[4,5,1,3],[13,27,18,26],[32,35,37,19],[1000,1001,857,1]
]);
