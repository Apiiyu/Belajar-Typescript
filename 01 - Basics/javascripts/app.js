var userInput;
var userName;
var userInputWithAny;
userInput = 5;
userInput = 'Rafi';
userInputWithAny = 'Any';
// userName = userInput; // --> This will throw an error, because userInput is of type unknown. So we need to check the type of userInput before assigning it to userName.
userName = userInputWithAny; // --> This will not throw an error, because userInputWithAny is of type any. So we can assign it to userName without any problem.
if (typeof userInput === 'string') {
    userName = userInput; // --> This will work, because we are checking the type of userInput before assigning it to userName.
}
var generateError = function (message, statusCode) {
    throw { message: message, statusCode: statusCode };
};
generateError('An error occurred!', 500);
