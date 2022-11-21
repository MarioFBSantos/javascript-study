function uniqueId(){
    const arr = [
        { id: 1, name:"test1" },
        { id: 2, name:"test2" },
        { id: 2, name:"test3" },
        { id: 3, name:"test4" },
        { id: 4, name:"test5" },
        { id: 5, name:"test6" },
        { id: 5, name:"test7" },
        { id: 6, name:"test8" }
    ];

    const newArray = [];
    const unique = arr.filter(element => {
        const duplicated = newArray.includes(element.id);

        newArray.push(element.id);
        
        return !duplicated ? true : false
    })

    console.log(unique);

}

uniqueId();