
// variables can declared without a type, in a functions's parameter typescript can infer the type
let logged;

// in a function parameter typescript always expect a type
function sendAnaltycs(data: string) {
    console.log(data);
    logged = true;
    console.log(logged);
}

sendAnaltycs('The data');

