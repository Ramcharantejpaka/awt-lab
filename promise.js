let p = new Promise((res, rej) =>{
    a =0
    if(a ==0){
        let sum = 0;
        for(let i = 0; i< 10000000000; i++){
            sum +=i;
        }
        console.log(sum)
    }
    res("success")
    rej("Failed")
})
p.then((message) => {
    console.log(`Task ` + message)
}).catch((message) => {
    console.log(message)
})

// 49999999990067860000
// Task success