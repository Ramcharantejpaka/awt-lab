const person = {
    fname : 'ram',
    id : 1232,
    address : {
        country: "India",
        state : "Telangana",
        district : "Warangal",
        pin : 506005
    }
}
mydetails(person);
function mydetails({fname,id,address:{country,state,district,pin}}){
    const details = ""+fname+" "+id+" "+country+" "+pin;
    console.log(details)    //ram 1232 India 506005
}



var list = ["ram","apple","supra","jordans"];
const [pname,fruit,car,shoe] = list

console.log(pname)  //ram
console.log(car)  //supra

