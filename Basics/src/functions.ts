
// typescript can detect the return type, but can be declared explicitly: (usually not necessary)
// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }

function add(n1: number, n2: number) {
    return n1 + n2;
}

// void return type - not returning anything
// void in typescript returns as undefined in javascript, but typescript not allow undefined without a returned value
// typescript use void for functions without a returned value
function printResult(num: number) {
    console.log('Result: ' + num);
}

// undiefined can also be used as a valid type in typescript:
let someValue: undefined;

// this void function can take a function with number return value as a parameter and display the result of the function 
printResult(add(5,12));

// Functions as types:
// this variable will function as pointer to the original function, but needs a function type to avoid possible runtime errors
// but cannot avoid mixing of functions
// let combineValues: Function;

// declare a function type with exact pramaters and return values:
// this can take a function without a parameter and returns a number value
let combineValue: () => number;

//function type with multipe parameters and return value:
let combinedValues: (a: number, b: number) => number;

//this variable becomse a pointer for the add function, but only can do that for functions, cannot point to other types like number
combinedValues = add;

// the pointer can be executed as the original function
console.log(combinedValues(8, 8));


// using function type with a callback (cb) function
// the callback functions's parameter and return type is declared within the function parameter
function AddHandle(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    //instead return, use the callback function with the passed result variable
    cb(result);
}

// using the callback function as an anonimous function
// passing a value through the anonimous function
AddHandle(10, 20, (result) => {
    console.log(result);
});