let productName = "laptop"
let quanitity = "2"

function estimatedDel(){
    return "10/02/2023"
}

description1 = "i have ordered "+quanitity+" "+productName+"(s) from \"amazon\", the estimated delivery is on "+estimatedDel()

description2 = `i have ordered ${quanitity} ${productName}s from "amazon", the estimated delivery is on ${estimatedDel()}`

console.log(description1)
console.log(description2)
