"use strict";
let userInput;
let userName1;
userInput = 5;
userInput = "Maximum";
// unknown type is not assignable, but the tpye: any could be assigned
// unknow is better, not allows random type coursions like javascript does with the any type
// userName = userInput;
// with this verification, unknown is better than any, can be avoid compile or unexpected runtime behaviour like in case of using the any type
if (typeof userInput === 'string') {
    userName1 = userInput;
}
// using the never type
// utility function that generates error objects:
// the return type of this function displays as void, but its actually a never type, because it never returns a value - it always crashes the running script
// if a function is intented to be like this, it should be designated as a never type
function generateError(message, code) {
    // any value or object can be thrown in javascript as an error
    throw { message: message, errorCode: code };
}
// this type of function never retruns a value, the never type function will always crash the running script
generateError('An error occured', 500);
// infinite loops also belong to the never type
// while(true) {}
