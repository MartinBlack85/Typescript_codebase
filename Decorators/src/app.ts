
// Adding a decorator to a class as a whole:

//A decorator actually is a function that is applied to something, can be class
function Logger(constructor: Function) {
    console.log('Logging');
    console.log(constructor);
}

// adding the decorator to the clas using the "@" as a typescript identifier, this points to the function (as a decorator)
// the decorator's function also runs without the class instantiation
@Logger
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
        console.log('Person object was created');
    }
}

const person1 = new Person('Martin');

console.log(person1);
console.log(person1.name);