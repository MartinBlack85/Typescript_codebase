"use strict";
function addNumbers(n1, n2, showResult, phrase) {
    // Vanilla javascript solution for exception handling
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw Error('Incorrect input');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.5;
const printResults = true;
const resultPhrase = 'Result is: ';
addNumbers(number1, number2, printResults, resultPhrase);
