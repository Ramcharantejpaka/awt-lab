class human{
    constructor(){
        this.age = 25;
    }
    printAge(){
        console.log(this.age);
    }
}
class Person extends human{
    constructor(){
        super();
        this.name = "ram";
        this.age = 22;
    }
    printName(){
        console.log(this.name);
    }
}
const person1 = new Person();
person1.printName();
person1.printAge();