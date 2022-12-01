/**
 * @description Handle Add Numbers
 * @param {Number} firstNumber 
 * @param {Number} secondNumber 
 * @return {Number}
 */
const addNumber = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

/**
 * @description Handle Print Result
 * @param {Number} result
 * @return {void} 
 */
const printResult = (result: number):void => { // --> We can also define types of result function for more clearly. As example in this case we define void type, because we don't return anything on this function.
  console.log(`Result: ${result}`);
}

let combineValues: (number1: number, number2: number) => number; // --> We can define function as types too. As example in this case we define function type, which takes two numbers and return number.
combineValues = addNumber; // --> We can assign function to variable, which is defined as function type.
// combineValues = printResult; // --> We can't assign function to variable, which is defined as function type, because this function doesn't return number.

const addAndHandleNumbers = (firstNumber: number, secondNumber: number, callback: (result: number) => void) => { // --> We can define callback function and it's types too. As example in this case we define callback function, which takes the result of add numbers and we also define types callback as void.
  const result = firstNumber + secondNumber;
  callback(result); // --> We can call callback function and pass the result of add numbers.
}

printResult(addNumber(5, 12));
console.log(combineValues(10, 10));
addAndHandleNumbers(10, 20, (result) => { // --> We can pass callback function as argument
  console.log(result);
})