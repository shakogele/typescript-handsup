/** Types
 * Function Types
 * Callbacks
 */

function add(
    n1: number, 
    n2: number): number{
        const result = n1 + n2;
        return result;
};

function printOutput(num: number): void { // Void return type
    console.log("Result: " + num)
}

function printOutput2(num: number): undefined { // if you just return undefined
    console.log("Result: " + num)
    return;
}

function addAndHandle(n1:number, n2:number, cb: (num: number) => void) { // callback function that takes one number and doesnot return anything
    const result = n1 + n2;
    cb(result);
}

printOutput(add(5,12))

let someValue: undefined // Undefined is a proper type in typescript
let combineValues: Function // Typeof Function
let combineValues2: (a:number, b:number) => number // Typeof Function that returns number

combineValues = add;

combineValues2 = add; // wont complain
// combineValues2 = printOutput; // will complain cause printOutput takes one value and returns undefined

addAndHandle(10, 29, (val) => console.log(val)) // doesnot complain cause it passes callback proper