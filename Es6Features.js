let x = 10;
{
    const x =6;
    console.log(x); //6
}
console.log(x); //10


const sum = (a,b) =>{
    return a+b;
}
console.log(sum(5,6)) //11

const person1={
    id : "1232",
    name : "ram",
}
const person2 ={
    id : "1231",
    name: "faisal",
}
console.log(person1)
console.log(person1.name); //ram
console.log(person2.name); //faisal

//usign this keyword
function student(){
    this.id=32;
    this.name="charan";
    this.getdetails = (function(){
        console.log(this.id+" , "+this.name);
    })
}
let s = new student();
s.getdetails();