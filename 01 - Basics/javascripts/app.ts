let userInput: unknown;
let userName: string;
let userInputWithAny: any;

userInput = 5;
userInput = 'Rafi';
userInputWithAny = 'Any';
// userName = userInput; // --> This will throw an error, because userInput is of type unknown. So we need to check the type of userInput before assigning it to userName.
userName = userInputWithAny; // --> This will not throw an error, because userInputWithAny is of type any. So we can assign it to userName without any problem.

if (typeof userInput === 'string') {
  userName = userInput; // --> This will work, because we are checking the type of userInput before assigning it to userName.
}

const generateError = (message: string, statusCode: number): never => { // --> In typescript we also can use never as a return type. It means that this function will never return anything. It sounds like a contradiction, but it is not. It is used when we want to throw an error and stop the execution of the function. Never types is not same as void types. Void types means that the function will return nothing. But never types means that the function will never return anything. So it is not same as void types.
  throw { message, statusCode };
};

generateError('An error occurred!', 500);