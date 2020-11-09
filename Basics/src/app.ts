let appID = 123;

// strict nullcheck example:
// the ! at the end ensures typescript that the html element exist and there won't be a null value at runtime
const button = document.querySelector('button')!;

// strictBindCallApply example:
function clickHandler(message: string) {
    // let userName = 'Martin';
    console.log('Clicked' +  message);
}

// we can run a runtime null check:
// using . bind() will bind the preconfigured argument:
if(button){
    button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}


// noImplicitReturns: true:
function addNumber(n1: number, n2: number) {
    let result = n1 + n2;
    if(result > 0) {
        return result;
    }
    // with this setting every branch needs a return
    return;
}


