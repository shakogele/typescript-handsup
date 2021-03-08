/** Types
 * Unknown
 * Never
 */
var userInput;
var username;
userInput = 5;
userInput = 'Shalva'; // no Compilation error
userInput = username; // Does not give error
// username = userInput // gives error because username is type of string and unknown includes all types
if (typeof userInput === 'string') {
    username = userInput; // this can go through
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Error Occured", 500);
