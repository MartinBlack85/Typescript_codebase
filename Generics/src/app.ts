
// Generics basics:
// Generic is a type which allows the flexible use of other types within its scope

// Built-in generics:
// Array is a built in generics type
// using the generics syntax:
const names: Array<string> = ['Martin', 'Hans'];    // just the same as using: const names: string[]

// names[0].split(' ');


// Promise is also a built in generics type, built in Javascript:
// Promise is a built-in constructor function in Javascript: it's parameter consist of a function:
// this creates a new promise object which is stored this promise constant
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task is done');
    }, 2000)
})

promise.then(data => {
    data.split(' ');
})



// Custom generics:

// Generic function:
// example: generic function that merges 2 object and returns one new object

// possible solution without using generics
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Martin'}, { age: 35 }));

// problem: if this returned object is stored in a variable, the properties won't be accessible
// const mergedObject = merge({ name: 'Martin'}, { age: 35 });
// mergedObject.name

// using a generic function:
// by using the 2 generic types, this function returns an intersection
// this tells typescript that this function will work different kind of types and just an undifined object
// also important to add type constraints to avoid runtime errors or disfunctions using the "extends" keyword
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// by using the gerenic function typescript can identify the value types
// the value types are set dynamically
const mergedObject = merge({ name: 'Martin', hobbies: ['Workout', 'Guitar']}, { age: 35 });
// we can define the value types in the function, but it's redundant and unncessary
// const mergedObject3 = merge<{name: string, hobbies: string[]}, {age: number}>({ name: 'Martin', hobbies: ['Workout', 'Guitar']}, { age: 35 });

const mergedObject2 = merge({ name: 'Yuri'}, { age: 20 });
console.log(mergedObject.name);
console.log(mergedObject2.name + ' ' + mergedObject2.age + ' years old');


