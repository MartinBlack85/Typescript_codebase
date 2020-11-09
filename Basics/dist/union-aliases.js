"use strict";
// The union type:
// useful when we want to work with 2 different types of input values, either number or a string
// using literal type in the third parameter: using string values in the union type)
// using the custom type which stores a union type
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //force the conversion by adding + in fron of each input
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     // return parseFloat(result);
    //     return +result;
    // } else {
    //     return result.toString;
    // }
}
const combinedAges = combine(25, 35, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('25', '35', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Martin', 'Fekete', 'as-text');
console.log(combinedNames);
