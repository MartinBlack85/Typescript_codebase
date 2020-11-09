"use strict";
// this looks like a javascript object, but it's an object type in typescript (using key - type pairs)
// in details:
/* const person: {
    name: string;
    age: number;
} = {
    name: 'Martin',
    age: 35
} */
// best practice: rely in typescript's type inference:
// const person = {
//  name: 'Martin',
//  age: 35,
//  hobbies: ['workout', 'guitar'],
//when typescript inference doesnt give the required value, need excplicit type declaration in the object:
/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];     //declare a tuple type, functions as a special fixed length array with specific types in it
} = {
    name: 'Martin',
    age: 35,
    hobbies: ['workout', 'guitar'],
    role: [2, 'author']         //tuple type in typescript
}; */
// person.role.push('admin');      // it's an error that typescript cannot catch
// person.role[1] = 10;            // type not allows that
//allowed operation for this tuple:
// person.role = [0, 'admin'];
// When you need unique identifier with mapped values:
// Declaring global constants for holding important user data:
// Example:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// When you need unique identifier with mapped values:
// Using enum makes this task easier:
// enum is a custom type in typescript - assign labels to numbers as an array, numbers or string can be assigned as well:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Martin',
    age: 35,
    hobbies: ['workout', 'guitar'],
    role: Role.ADMIN
};
//array of string type
let favouriteActivities;
favouriteActivities = ['sports', 'music', 'coding'];
for (const hobby in person.hobbies) {
    console.log(hobby.toUpperCase());
}
//mixed array - can use the any type to store mixed types in an array, best to avoid it's use if possible
// let mixedArray: any[];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
console.log(person.hobbies);
//console.log(favouriteActivities);
