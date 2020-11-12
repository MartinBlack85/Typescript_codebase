
const userName = 'Martin';

// userName = 'George';

let age = 30;

age = 35;

function addNumber(num1: number, num2: number) {
    let result;
    result = num1 + num2;
    return result;
}

// arrow function:
// const add = (n1: number, n2: number) => {
//     return n1 + n2;
// }

// if only 1 line, can be shorter: always an implicit return statement
// we can also assign a default value in the parameter, default value should come last
const add = (a: number, b: number = 1) => a + b;

// function with 1 paramater:
// const printOutPut = (output: string | number) => console.log(output);

// furhter option to declare:
const printOutPut: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

// printOutPut(add(5,2));

// function with default parameter can also be called with only 1 parameter (out of 2))
printOutPut(add(5));


// Spread operator: useful for pulling out elements from an array

const hobbies = ['Workout', 'Guitar'];
const activeHobbies = ['Yoga'];

// without using the spread
// activeHobbies.push(hobbies[0], hobbies[1]);
// spread operator can be used directy in the targeted array:
// activeHobbies = ['Hiking', ...hobbies];

// with spread operator
activeHobbies.push(...hobbies);

// spread operator on an object:
const user = {
    userFirstName: 'Tom',
    userAge: 25
};

// copying the pointer from memory into a new constant
//const copiedPerson = person

// using the spread operator: the key - value pairs are pulled out from the object
const copiedUser = {...user};



// Rest parameters:
// we want a flexible function with extensible number of parameters
// we can also use tuples as the parameter: addNum = (...numbers: [number, number, number])
const addNum = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
};

const addNumbers = addNum(5, 10, 16, 2.5);
console.log(addNumbers);


// Object and array destructuring

// basic solution:
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// quicker solution using array destructure: this keeps the original array intact
// the pulled values will be stroed in constants
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

// object destructuring:
// const { userFirstName, userAge} = user;

// we also can override the name of the constant:
const { userFirstName: firstName, userAge} = user;

console.log(firstName, userAge, user);




