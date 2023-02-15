//CAllback

const person1 = true
const person2 = true
function Details(callback , errorcallback){
    if(person1){
        callback({
            name: 'ram',
            id: '1232'
        })
    }else if (person2){
        callback({
            name: 'charan',
            id: '32'
        })
    }else{
        errorcallback('No Details...')
    }
}
Details((msg) => {
    console.log(msg.name+" "+msg.id)
},(err) => {
    console.log(err)
})

// ram 1232