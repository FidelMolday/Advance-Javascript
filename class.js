class Person{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("Hello,my name is" + this.name);
    }
}
//create an instance
const person = new Person('Fidel');
person.sayHello();