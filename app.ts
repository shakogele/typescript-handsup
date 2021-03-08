/** Types
 * Unknown
 * Never
 */

let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Shalva'; // no Compilation error
userInput = username // Does not give error
// username = userInput // gives error because username is type of string and unknown includes all types

if(typeof userInput === 'string'){
    username = userInput; // this can go through
}

function generateError(message: string, code: number) : never { // never returns anything hence we have typeof never and not void or undefined
    throw {message, errorCode: code};
}

generateError("Error Occured", 500)